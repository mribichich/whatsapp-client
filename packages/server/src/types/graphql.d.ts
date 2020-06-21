import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { User, Message, Chat } from '../db';
import { MyContext } from '../context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  URL: string;
};



export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['URL']>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  chat?: Maybe<Chat>;
  sender?: Maybe<User>;
  recipient?: Maybe<User>;
  isMine: Scalars['Boolean'];
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['URL']>;
  lastMessage?: Maybe<Message>;
  messages: Array<Message>;
  participants: Array<User>;
};

export type Query = {
  __typename?: 'Query';
  chats: Array<Chat>;
  chat?: Maybe<Chat>;
  users: Array<User>;
};


export type QueryChatArgs = {
  chatId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMessage?: Maybe<Message>;
  addChat?: Maybe<Chat>;
};


export type MutationAddMessageArgs = {
  chatId: Scalars['ID'];
  content: Scalars['String'];
};


export type MutationAddChatArgs = {
  recipientId: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  messageAdded: Message;
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
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Date: ResolverTypeWrapper<Scalars['Date']>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Message: ResolverTypeWrapper<Message>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Chat: ResolverTypeWrapper<Chat>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Date: Scalars['Date'];
  URL: Scalars['URL'];
  User: User;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Message: Message;
  Boolean: Scalars['Boolean'];
  Chat: Chat;
  Query: {};
  Mutation: {};
  Subscription: {};
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type UserResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessageResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  chat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  isMine?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ChatResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  lastMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType>;
  participants?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  chats?: Resolver<Array<ResolversTypes['Chat']>, ParentType, ContextType>;
  chat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType, RequireFields<QueryChatArgs, 'chatId'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationAddMessageArgs, 'chatId' | 'content'>>;
  addChat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType, RequireFields<MutationAddChatArgs, 'recipientId'>>;
};

export type SubscriptionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  messageAdded?: SubscriptionResolver<ResolversTypes['Message'], "messageAdded", ParentType, ContextType>;
};

export type Resolvers<ContextType = MyContext> = {
  Date?: GraphQLScalarType;
  URL?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Chat?: ChatResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MyContext> = Resolvers<ContextType>;
