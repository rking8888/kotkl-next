import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Manager: ResolverTypeWrapper<Manager>;
  TeamLogos: ResolverTypeWrapper<TeamLogos>;
  TeamMVC: ResolverTypeWrapper<TeamMvc>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars['String'];
  Manager: Manager;
  TeamLogos: TeamLogos;
  TeamMVC: TeamMvc;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  allTeams?: Resolver<
    Array<ResolversTypes['TeamMVC']>,
    ParentType,
    ContextType
  >;
  Team?: Resolver<
    Maybe<ResolversTypes['TeamMVC']>,
    ParentType,
    ContextType,
    RequireFields<QueryTeamArgs, 'team_id'>
  >;
};

export type ManagerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Manager'] = ResolversParentTypes['Manager']
> = {
  manager_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamLogosResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TeamLogos'] = ResolversParentTypes['TeamLogos']
> = {
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamMvcResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TeamMVC'] = ResolversParentTypes['TeamMVC']
> = {
  team_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  auction_budget_total?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  auction_budget_spent?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  wavier_priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  faab_balance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number_of_moves?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number_of_trades?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  managers?: Resolver<
    Array<Maybe<ResolversTypes['Manager']>>,
    ParentType,
    ContextType
  >;
  team_logos?: Resolver<
    Array<Maybe<ResolversTypes['TeamLogos']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Manager?: ManagerResolvers<ContextType>;
  TeamLogos?: TeamLogosResolvers<ContextType>;
  TeamMVC?: TeamMvcResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export type TeamQueryVariables = Exact<{
  team_id: Scalars['String'];
}>;

export type TeamQuery = { Team?: Maybe<Pick<TeamMvc, 'name'>> };

export type IndexQueryVariables = Exact<{ [key: string]: never }>;

export type IndexQuery = {
  allTeams: Array<
    Pick<TeamMvc, 'team_id' | 'name'> & {
      managers: Array<Maybe<Pick<Manager, 'nickname'>>>;
      team_logos: Array<Maybe<Pick<TeamLogos, 'url'>>>;
    }
  >;
};

export const TeamDocument = gql`
  query Team($team_id: String!) {
    Team(team_id: $team_id) {
      name
    }
  }
`;

/**
 * __useTeamQuery__
 *
 * To run a query within a React component, call `useTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamQuery({
 *   variables: {
 *      team_id: // value for 'team_id'
 *   },
 * });
 */
export function useTeamQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<TeamQuery, TeamQueryVariables>
) {
  return ApolloReactHooks.useQuery<TeamQuery, TeamQueryVariables>(
    TeamDocument,
    baseOptions
  );
}
export function useTeamLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    TeamQuery,
    TeamQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<TeamQuery, TeamQueryVariables>(
    TeamDocument,
    baseOptions
  );
}
export type TeamQueryHookResult = ReturnType<typeof useTeamQuery>;
export type TeamLazyQueryHookResult = ReturnType<typeof useTeamLazyQuery>;
export type TeamQueryResult = ApolloReactCommon.QueryResult<
  TeamQuery,
  TeamQueryVariables
>;
export const IndexDocument = gql`
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

/**
 * __useIndexQuery__
 *
 * To run a query within a React component, call `useIndexQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexQuery({
 *   variables: {
 *   },
 * });
 */
export function useIndexQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    IndexQuery,
    IndexQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<IndexQuery, IndexQueryVariables>(
    IndexDocument,
    baseOptions
  );
}
export function useIndexLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    IndexQuery,
    IndexQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<IndexQuery, IndexQueryVariables>(
    IndexDocument,
    baseOptions
  );
}
export type IndexQueryHookResult = ReturnType<typeof useIndexQuery>;
export type IndexLazyQueryHookResult = ReturnType<typeof useIndexLazyQuery>;
export type IndexQueryResult = ApolloReactCommon.QueryResult<
  IndexQuery,
  IndexQueryVariables
>;
