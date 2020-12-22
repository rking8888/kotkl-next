export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  allTeams: Array<TeamMvc>;
  Team?: Maybe<TeamMvc>;
};

export type QueryTeamArgs = {
  teamId: Scalars['ID'];
};

export type Manager = {
  managerId: Scalars['ID'];
  nickname: Scalars['String'];
  email: Scalars['String'];
};

export type TeamMvc = {
  teamId: Scalars['ID'];
  name: Scalars['String'];
  teamLogo?: Maybe<Scalars['String']>;
  auctionBudgetTotal: Scalars['Int'];
  auctionBudgetSpent: Scalars['Int'];
  manager: Array<Maybe<Manager>>;
  wavierPriority: Scalars['Int'];
  faabBalance: Scalars['Int'];
  numberOfMoves: Scalars['Int'];
  numberOfTrades: Scalars['Int'];
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

import { ObjectID } from 'mongodb';
export type ManagerDbObject = {
  managerId: string;
  nickname: string;
  email: string;
};

export type TeamMvcDbObject = {
  _id: ObjectID;
  name: string;
  teamLogo?: Maybe<string>;
  auctionBudgetTotal: number;
  auctionBudgetSpent: number;
  manager: Array<Maybe<Manager>>;
  wavierPriority: number;
  faabBalance: number;
  numberOfMoves: number;
  numberOfTrades: number;
};
