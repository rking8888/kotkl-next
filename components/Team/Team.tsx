import { gql } from '@apollo/client';
import { useTeamQuery } from '../../src/graphql/types';
import { useIndexQuery } from '../../src/graphql/types';

interface Props {
  teamId: string;
}

gql`
  query Team($teamId: ID!) {
    Team(teamId: $teamId) {
      name
      manager {
        nickname
      }
    }
  }
`;
gql`
  query Index {
    allTeams {
      name
    }
  }
`;

const Team = () => {
  const { data, loading } = useIndexQuery();

  console.log(data);
  // const { teamId } = props;
  // const { loading, data } = useTeamQuery({
  //   variables: {
  //     teamId,
  //   },
  // });
  // let content = <div>Loading ...</div>;

  // if (data) {
  //   console.log(data)
  //   const name = data.Team;
  //   content = (
  //     <>
  //     <div> Name: {name}</div>
  //     <div>Manger</div>
  //     </>
  //   );
  // }
  return null;
};

export default Team;
