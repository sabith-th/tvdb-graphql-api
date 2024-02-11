import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import 'dotenv/config';
import TvdbAPI from './datasources/TvdbAPI.js';
import resolvers from './resolvers/index.js';
import typeDefs from './schemas/index.js';
import tokenRefresher, { setNewToken } from './tokenRefresher.js';

setNewToken();

// async function startApolloServer() {
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
// }

// startApolloServer();

tokenRefresher.start();

export default server;