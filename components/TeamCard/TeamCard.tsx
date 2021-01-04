import React from 'react';
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@material-ui/core';
import styles from './TeamCard.module.css';
import { TeamSimple } from '../../src/graphql/types';

export interface TeamCardProps {
  team: TeamSimple;
}

const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles.cover}
        image={team.team_logos[0]?.url}
        title='Team Logo'
      />
      <div className={styles.details}>
        <CardContent className={styles.content}>
          <Typography component='h5' variant='h5'>
            {team.name}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {team.managers.map((manager: any, m: number) =>
              manager?.is_comanager == null ? (
                <div key={m}>Manager: {manager?.nickname} </div>
              ) : (
                <div key={m}>Co-manager: {manager?.nickname}</div>
              )
            )}
          </Typography>
          <div className={styles.controls}>
            <Button size='medium' variant='outlined' color='primary'>
              <Typography>VIEW TEAM</Typography>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default TeamCard;
