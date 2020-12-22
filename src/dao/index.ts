import { MongoClient, Db } from 'mongodb';
export * from './types';

export let client: MongoClient;
export let database: Db;

export const connect = async (): Promise<Db> => {
  if (!database) {
    try {
      console.info(`Connecting to database ${process.env.MONGO_DB_URI}`);
      client = await MongoClient.connect(process.env.MONGO_DB_URI!, {
        useUnifiedTopology: true
      });
      database = client.db('kotkl');
    } catch (error) {
      console.info('Unable to connect to DB', error);
    }
  }
  console.info(`Success! Connected to database ${process.env.MONGO_DB_URI}`);
  return database;
};
