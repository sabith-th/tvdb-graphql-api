import { ApolloServer } from 'apollo-server';
import 'dotenv/config';
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
  context: () => {
    return {
      token: process.env.TOKEN
    };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
