import {
  Button,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
} from '@material-ui/core';
import SyncIcon from '@material-ui/icons/Sync';
import PeopleIcon from '@material-ui/icons/People';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ConnectedStatus from '../components/ConnectedStatus/ConnectedStatus';
import { parseCookies } from '../helpers/index';
import styles from '../styles/Yahoo.module.css';
import Head from 'next/head';

function Yahoo({ cookie }) {
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Yahoo API Calls</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ConnectedStatus
        connected={cookie && cookie.accessToken}
        primaryActionButton={buttonToAuthorize}
        secondaryActionButton={buttonToRefresh}
      />

      <main className={styles.main}>
        <Typography variant='h4'>Yahoo API Calls</Typography>
        <List>
          <Divider component='li' />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ListAltIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Teams' />
            <ListItemSecondaryAction>
              Last Updated...
              <IconButton aria-label='sync'>
                <SyncIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider component='li' />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PeopleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Players' />
            <ListItemSecondaryAction>
              Last Updated...
              <IconButton aria-label='sync'>
                <SyncIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider component='li' />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SyncAltIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Transactions' />
            <ListItemSecondaryAction>
              Last Updated...
              <IconButton aria-label='sync'>
                <SyncIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider component='li' />
        </List>
      </main>
    </div>
  );
}

Yahoo.getInitialProps = async (ctx) => {
  const cookie = parseCookies(ctx.req);
  return { cookie: cookie };
};

export default Yahoo;
