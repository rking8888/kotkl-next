import { useQuery } from 'react-query';
import { yf } from '../util/yahoo-fantasy';

export const useTeamPlayersQuery = (teamId?: number) => {
  console.log('teamId', teamId);
  async () => {
    const response = await yf.team.roster(
      'nba.l.' + process.env.YAHOO_LEAGUE_ID + '.t.' + teamId
    );
    return response;
  };
};
