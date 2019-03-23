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
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return {
      token
    };
  },
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  },
  introspection: true,
  playground: true
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
