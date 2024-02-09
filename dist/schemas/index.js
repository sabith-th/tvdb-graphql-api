"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _graphqlTag = _interopRequireDefault(require("graphql-tag"));
var _fs = require("fs");
var _path = require("path");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const typeDefinitions = (0, _fs.readFileSync)((0, _path.join)(__dirname, '../schemas/tvdb.graphql'), 'utf8');
var _default = exports.default = (0, _graphqlTag.default)`
  ${typeDefinitions}
`;