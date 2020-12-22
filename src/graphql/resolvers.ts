import { Resolvers, TeamMvc } from './types';
import { connect } from '../dao';
import { TeamMvcDbObject } from '../dao/types';
import { ObjectID } from 'mongodb';

const dbPromise = connect();

const getCollection = async () => {
  const db = await dbPromise;
  return db.collection<TeamMvcDbObject>('teams');
};

const fromDbObject = (dbObject: TeamMvcDbObject): TeamMvc => ({
  team_id: dbObject.team_id,
  name: dbObject.name,
  auction_budget_total: dbObject.auction_budget_total,
  auction_budget_spent: dbObject.auction_budget_spent,
  wavier_priority: dbObject.wavier_priority,
  faab_balance: dbObject.faab_balance,
  number_of_moves: dbObject.number_of_moves,
  number_of_trades: dbObject.number_of_trades,
  managers: dbObject.managers,
  team_logos: dbObject.team_logos
});
const resolvers: Resolvers = {
  Query: {
    allTeams: async () => {
      const collection = await getCollection();
      return await collection.find().map(fromDbObject).toArray();
    },
    Team: async (_: any, { team_id }) => {
      const collection = await getCollection();
      const dbObject = await collection.findOne({
        _id: ObjectID.createFromHexString(team_id)
      });
      return fromDbObject(dbObject!);
    }
  }
  //   Mutation: {
  //     createTodo: async (_: any, { description }) => {
  //       const data: Omit<TeamMvcDbObject, "_id"> = {
  //         description,
  //         completed: false,
  //       };

  //       const collection = await getCollection();
  //       const document = await collection.insertOne(data);
  //       return fromDbObject({
  //         ...data,
  //         _id: document.insertedId,
  //       });
  //     },
  //     updateTodo: async (_: any, { toteam, data }) => {
  //       const collection = await getCollection();
  //       const result = await collection.findOneAndUpdate(
  //         {
  //           _id: ObjectID.createFromHexString(toteam),
  //         },
  //         { $set: data },
  //         {
  //           returnOriginal: false,
  //         }
  //       );

  //       return fromDbObject(result.value);
  //     },
  //   },
};

export default resolvers;
