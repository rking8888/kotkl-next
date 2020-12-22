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
  team_id: Scalars['String'];
};

export type Manager = {
  manager_id: Scalars['String'];
  nickname: Scalars['String'];
  email: Scalars['String'];
};

export type TeamLogos = {
  url: Scalars['String'];
};

export type TeamMvc = {
  team_id: Scalars['String'];
  name: Scalars['String'];
  auction_budget_total: Scalars['String'];
  auction_budget_spent: Scalars['Int'];
  wavier_priority: Scalars['Int'];
  faab_balance: Scalars['String'];
  number_of_moves: Scalars['String'];
  number_of_trades: Scalars['Int'];
  managers: Array<Maybe<Manager>>;
  team_logos: Array<Maybe<TeamLogos>>;
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

import { ObjectID } from 'mongodb';
export type ManagerDbObject = {
  manager_id: string;
  nickname: string;
  email: string;
};

export type TeamLogosDbObject = {
  url: string;
};

export type TeamMvcDbObject = {
  team_id: string;
  name: string;
  auction_budget_total: string;
  auction_budget_spent: number;
  wavier_priority: number;
  faab_balance: string;
  number_of_moves: string;
  number_of_trades: number;
  managers: Array<Maybe<Manager>>;
  team_logos: Array<Maybe<TeamLogos>>;
};
