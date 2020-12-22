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
      }
      team_logos {
        url
      }
    }
  }
`;

const Team = () => {
  const { data, loading } = useIndexQuery();
  console.log(data);
  const teamList = data?.allTeams.map((team, t) =>
    team.team_logos.map((logo, l) => (
      <li key={t}>
        <span>Team Name: {team.name}</span>
        <div>Logo:</div>
        <img src={logo?.url} alt='' />
      </li>
    ))
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

export default Team;
