'use strict';

var _apolloServer = require('apollo-server');

require('dotenv/config');

var _TvdbAPI = require('./datasources/TvdbAPI');

var _TvdbAPI2 = _interopRequireDefault(_TvdbAPI);

var _index = require('./resolvers/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./schemas/index');

var _index4 = _interopRequireDefault(_index3);

var _tokenRefresher = require('./tokenRefresher');

var _tokenRefresher2 = _interopRequireDefault(_tokenRefresher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = new _apolloServer.ApolloServer({
  typeDefs: _index4.default,
  resolvers: _index2.default,
  dataSources: () => {
    return {
      tvdbAPI: new _TvdbAPI2.default()
    };
  },
  context: ({ req }) => {
    const token = req.headers.authorization || process.env.TOKEN || '';
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

(0, _tokenRefresher.setNewToken)();
_tokenRefresher2.default.start();