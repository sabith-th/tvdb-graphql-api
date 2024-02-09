"use strict";

var _server = require("@apollo/server");
var _standalone = require("@apollo/server/standalone");
require("dotenv/config");
var _TvdbAPI = _interopRequireDefault(require("./datasources/TvdbAPI"));
var _index = _interopRequireDefault(require("./resolvers/index"));
var _index2 = _interopRequireDefault(require("./schemas/index"));
var _tokenRefresher = _interopRequireWildcard(require("./tokenRefresher"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _tokenRefresher.setNewToken)();
async function startApolloServer() {
  const server = new _server.ApolloServer({
    typeDefs: _index2.default,
    resolvers: _index.default
  });
  const {
    url
  } = await (0, _standalone.startStandaloneServer)(server, {
    context: ({
      req
    }) => {
      const token = req.headers.authorization || process.env.TOKEN || '';
      const {
        cache
      } = server;
      return {
        dataSources: {
          tvdbAPI: new _TvdbAPI.default({
            cache,
            token
          })
        }
      };
    },
    listen: {
      port: process.env.PORT || 4000
    }
  });
  console.log(`🚀  Server ready at ${url}`);
}
startApolloServer();
_tokenRefresher.default.start();