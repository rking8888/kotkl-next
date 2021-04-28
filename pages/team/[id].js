import { yf } from '../../util/yahoo-fantasy';
import { Button, Divider, Typography, List } from '@material-ui/core';
import { parseCookies } from '../../helpers/index';
import Player from '../../components/Player/Player';
import styles from '../../styles/Team.module.css';
import Head from 'next/head';
import ConnectedStatus from '../../components/ConnectedStatus/ConnectedStatus';
import { Alert } from '@material-ui/lab';

export default function Team({
  teamData,
  transactions,
  draftResults,
  cookie,
  error,
}) {
  const buttonToAuthorize = (
    <Button color='primary' variant='contained' href='/api/auth'>
      Authorize Yahoo
    </Button>
  );

  const buttonToRefresh = (
    <Button color='primary' variant='contained' href='/api/auth'>
      Refresh Yahoo Token
    </Button>
  );

  console.log(teamData);

  function checkEligibility(player) {
    const playerId = player.player_id.toString();
    // const relevantTransactions2 = transactions.transactions.map((element) => {
    //     return {subElements: element.players.filter((subElement) => subElement.player_id === player.toString())}
    //   })
    let keeperEligible = true;
    let reason = '';

    // check draft results first
    const wasDrafted = draftResults.draft_results.filter(
      (d) => d.player_key === `402.p.${playerId.toString()}`
    );
    //const cost = (wasDrafted && wasDrafted[0]);
    //console.log(wasDrafted[0]?.cost);
    if (!wasDrafted) {
      return { keeperEligible: false, reason: `was not drafted` };
    } else {
      reason = `was drafted for $${wasDrafted[0]?.cost}`;
    }

    // check transactions
    const relevantTransactions = transactions.transactions.filter((p) =>
      p.players.some((k) => k.player_id === playerId.toString())
    );
    relevantTransactions.forEach((transaction) => {
      transaction.players.forEach((transactionPart) => {
        if (
          transactionPart.player_id === playerId.toString() &&
          transactionPart.transaction.type === 'add' &&
          transactionPart.transaction.source_type === 'freeagents'
        ) {
          keeperEligible = false;
          reason = `was picked up from free agency by ${transactionPart.transaction.destination_team_name}`;
        }
      });
    });
    return { keeperEligible, reason };
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Team Players</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <ConnectedStatus
          connected={cookie && cookie.accessToken}
          primaryActionButton={buttonToAuthorize}
          secondaryActionButton={buttonToRefresh}
        />
        <Typography variant='h4'>
          {teamData.name ? `${teamData.name} Players` : 'Players'}
        </Typography>
        {error === '' ? (
          <>
            <List>
              {teamData.roster.map((player) => (
                <div key={player.player_id}>
                  <Divider component='li' />
                  <Player
                    player={player}
                    keeperEligible={checkEligibility(player, transactions)}
                  />
                </div>
              ))}
            </List>
          </>
        ) : (
          <Alert severity='error'>{error}</Alert>
        )}
      </main>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const cookie = parseCookies(context.req);
  const AUTH_YAHOO_ERROR = 'Please re-authenticate Yahoo to see data. ';
  let error = '';

  if (cookie) {
    yf.setUserToken(cookie.accessToken);
  } else {
    error = AUTH_YAHOO_ERROR;
  }

  // Fetch data from external API
  //const res = useTeamPlayersQuery(context.params.id);
  let teamData = {};
  let transactions = {};
  let draftResults = {};
  try {
    teamData = await yf.team.roster(
      'nba.l.' + process.env.YAHOO_LEAGUE_ID + '.t.' + context.params.id
    );
    transactions = await yf.league.transactions(
      'nba.l.' + process.env.YAHOO_LEAGUE_ID
    );
    draftResults = await yf.league.draft_results(
      'nba.l.' + process.env.YAHOO_LEAGUE_ID
    );
  } catch (e) {
    error = e.description;
  }

  // if(teamData.description.match(/You must be logged in to view this league/i)) {

  // const data = response.json;

  // Pass data to the page via props
  return { props: { teamData, transactions, draftResults, cookie, error } };
}
