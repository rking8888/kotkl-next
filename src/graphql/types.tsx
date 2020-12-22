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
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Manager: ResolverTypeWrapper<Manager>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TeamMVC: ResolverTypeWrapper<TeamMvc>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars['ID'];
  Manager: Manager;
  String: Scalars['String'];
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
    RequireFields<QueryTeamArgs, 'teamId'>
  >;
};

export type ManagerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Manager'] = ResolversParentTypes['Manager']
> = {
  managerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamMvcResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TeamMVC'] = ResolversParentTypes['TeamMVC']
> = {
  teamId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamLogo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  auctionBudgetTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  auctionBudgetSpent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  manager?: Resolver<
    Array<Maybe<ResolversTypes['Manager']>>,
    ParentType,
    ContextType
  >;
  wavierPriority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  faabBalance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numberOfMoves?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numberOfTrades?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Manager?: ManagerResolvers<ContextType>;
  TeamMVC?: TeamMvcResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export type TeamQueryVariables = Exact<{
  teamId: Scalars['ID'];
}>;

export type TeamQuery = {
  Team?: Maybe<
    Pick<TeamMvc, 'name'> & { manager: Array<Maybe<Pick<Manager, 'nickname'>>> }
  >;
};

export type IndexQueryVariables = Exact<{ [key: string]: never }>;

export type IndexQuery = { allTeams: Array<Pick<TeamMvc, 'name'>> };

export const TeamDocument = gql`
  query Team($teamId: ID!) {
    Team(teamId: $teamId) {
      name
      manager {
        nickname
      }
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
 *      teamId: // value for 'teamId'
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
      name
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
