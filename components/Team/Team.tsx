import { gql } from '@apollo/client';
import { useTeamQuery } from '../../src/graphql/types';
import { useIndexQuery } from '../../src/graphql/types';

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
      }
      team_logos {
        url
      }
    }
  }
`;

const Teams = () => {
  const { data, loading } = useIndexQuery();
  console.log(data);
  const teamList = data?.allTeams.map((team, i) =>
    team.team_logos.map((logo, l) =>
      team.managers.map((manager, m) => (
        <li key={manager?.nickname}>
          <div>Team Name: {team.name}</div>
          <div>Manager: {manager?.nickname}</div>
          <div>Logo:</div>
          <img src={logo?.url} alt='team logo' />
        </li>
      ))
    )
  );
  let content = <div>Loading ...</div>;
  if (!loading && data) {
    content = (
      <>
        <h2>Teams test:</h2>
        <ul>{teamList}</ul>
      </>
    );
  }
  return content;
};

export default Teams;
