'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloServer = require('apollo-server');

var _fs = require('fs');

var _path = require('path');

const typeDefinitions = (0, _fs.readFileSync)((0, _path.join)(__dirname, '../schemas/tvdb.graphql'), 'utf8');

exports.default = _apolloServer.gql`
  ${typeDefinitions}
`;