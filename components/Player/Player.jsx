import React from 'react';
import {
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import styles from './Player.module.css';

const Player = ({ player, keeperEligible }) => {
  return (
    <ListItem
      className={
        keeperEligible.keeperEligible ? styles.borderGreen : styles.borderRed
      }
    >
      <ListItemAvatar>
        <Avatar>
          <img alt='headshot' src={player.headshot.url} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={player.name.full}
        secondary={
          <React.Fragment>
            <Typography component='span' variant='body2' color='textPrimary'>
              {keeperEligible.keeperEligible ? '' : 'Not'} Keeper Eligible
            </Typography>
            {keeperEligible.reason && ` - ${keeperEligible.reason}`}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default Player;
