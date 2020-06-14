import { importSchema } from 'graphql-import';
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = importSchema('src/schema/typeDefs.graphql');

export default makeExecutableSchema({
  resolvers: resolvers as IResolvers,
  typeDefs,
});
