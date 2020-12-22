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
  const teamList = data?.allTeams.map((team, i) =>
    team.team_logos.map((logo, l) => (
      <li key={i}>
        <div>Team Name: {team.name}</div>
        {team.managers.map((manager, m) =>
          manager?.is_comanager == null ? (
            <div key={m}>Manager: {manager?.nickname} </div>
          ) : (
            <div key={m}>Co-manager: {manager?.nickname}</div>
          )
        )}
        <div>Logo:</div>
        <img src={logo?.url} alt='team logo' />
      </li>
    ))
  );
  let content = <div>Loading ...</div>;
  if (!loading && data) {
    content = (
      <>
        <h2>KOTKL TEAMS:</h2>
        <ul>{teamList}</ul>
      </>
    );
  }
  return content;
};

export default Teams;
