"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _EpisodeResolver = _interopRequireDefault(require("./EpisodeResolver"));
var _ImageResolver = _interopRequireDefault(require("./ImageResolver"));
var _LoginResolver = _interopRequireDefault(require("./LoginResolver"));
var _SearchResolver = _interopRequireDefault(require("./SearchResolver"));
var _SeriesResolver = _interopRequireDefault(require("./SeriesResolver"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const resolvers = [_SeriesResolver.default, _LoginResolver.default, _SearchResolver.default, _EpisodeResolver.default, _ImageResolver.default];
var _default = exports.default = resolvers;