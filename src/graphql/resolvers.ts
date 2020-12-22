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
  teamId: dbObject._id.toHexString(),
  name: dbObject.name,
  teamLogo: dbObject.teamLogo,
  auctionBudgetTotal: dbObject.auctionBudgetSpent,
  auctionBudgetSpent: dbObject.auctionBudgetTotal,
  manager: dbObject.manager,
  wavierPriority: dbObject.wavierPriority,
  faabBalance: dbObject.faabBalance,
  numberOfMoves: dbObject.numberOfMoves,
  numberOfTrades: dbObject.numberOfTrades
});
const resolvers: Resolvers = {
  Query: {
    allTeams: async () => {
      const collection = await getCollection();
      console.log(collection.find());
      return await collection.find().map(fromDbObject).toArray();
    },
    Team: async (_: any, { teamId }) => {
      const collection = await getCollection();
      const dbObject = await collection.findOne({
        _id: ObjectID.createFromHexString(teamId)
      });
      console.log(dbObject);
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
