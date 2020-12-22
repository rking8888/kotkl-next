import { MongoClient, Db } from 'mongodb';
require('dotenv').config();
export * from './types';

export let client: MongoClient;
export let database: Db;

export const connect = async (): Promise<Db> => {
  if (!database) {
    try {
      console.info(`Connecting to database ${process.env.MONGO_DB_URI}`);
      client = await MongoClient.connect(process.env.MONGO_DB_URI!);
      database = client.db('kotkl');
    } catch (error) {
      console.log('Unable to connect to DB', error);
    }
  }
  console.log('Connected');
  return database;
};
