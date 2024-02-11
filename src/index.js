import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import 'dotenv/config';
import TvdbAPI from './datasources/TvdbAPI';
import resolvers from './resolvers/index';
import typeDefs from './schemas/index';
import tokenRefresher, { setNewToken } from './tokenRefresher';

setNewToken();

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: ({ req }) => {
      const token = req.headers.authorization || process.env.TOKEN || '';
      const { cache } = server;
      return {
        dataSources: {
          tvdbAPI: new TvdbAPI({ cache, token }),
        },
      };
    },
    listen: {
      port: process.env.PORT || 4000,
    },
  });
  console.log(`🚀  Server ready at ${url}`);
}

startApolloServer();

tokenRefresher.start();