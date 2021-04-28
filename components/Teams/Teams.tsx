import { gql } from '@apollo/client';
import { useTeamQuery } from '../../src/graphql/types';
import { useIndexQuery } from '../../src/graphql/types';
import TeamCard from '../TeamCard/TeamCard';
import { Grid } from '@material-ui/core';

interface Props {
  team_id: string;
}

gql`
  query Team($team_id: String!) {
    Team(team_id: $team_id) {
      name
    }
  }
`;
gql`
  query Index {
    allTeams {
      team_id
      name
      managers {
        nickname
        manager_id
        is_comanager
      }
      team_logos {
        url
      }
    }
  }
`;
const Teams = () => {
  const { data, loading } = useIndexQuery();
  const teamList = data?.allTeams.map((team, i) => (
    <Grid item key={team.team_id}>
      <TeamCard team={team} />
    </Grid>
  ));
  let content = <div>Loading ...</div>;
  if (!loading && data) {
    content = (
      <Grid container xs={5} direction='column' spacing={6}>
        {teamList}
      </Grid>
    );
  }
  return content;
};

export default Teams;
