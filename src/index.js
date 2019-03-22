import { ApolloServer } from 'apollo-server';
import TvdbAPI from './datasources/TvdbAPI';
import resolvers from './resolvers/index';
import typeDefs from './schemas/index';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      tvdbAPI: new TvdbAPI()
    };
  },
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return {
      token
    };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
