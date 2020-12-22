import { TeamMvc } from '../src/graphql/types';
import { useState } from 'react';

const Index = () => {
  const [teams] = useState([
    {
      team_id: '1'
    }
  ] as TeamMvc[]);
  const todoElements = teams.map((t) => (
    <tr key={t.team_id}>
      <td>Name:{t.name}</td>
    </tr>
  ));
  return teams.length > 0 ? (
    <table>
      <tbody>{todoElements}</tbody>
    </table>
  ) : (
    <div>No Teams</div>
  );
};

export default Index;
