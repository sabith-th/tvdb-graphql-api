'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EpisodeResolver = require('./EpisodeResolver');

var _EpisodeResolver2 = _interopRequireDefault(_EpisodeResolver);

var _ImageResolver = require('./ImageResolver');

var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

var _LoginResolver = require('./LoginResolver');

var _LoginResolver2 = _interopRequireDefault(_LoginResolver);

var _SearchResolver = require('./SearchResolver');

var _SearchResolver2 = _interopRequireDefault(_SearchResolver);

var _SeriesResolver = require('./SeriesResolver');

var _SeriesResolver2 = _interopRequireDefault(_SeriesResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolvers = [_SeriesResolver2.default, _LoginResolver2.default, _SearchResolver2.default, _EpisodeResolver2.default, _ImageResolver2.default];

exports.default = resolvers;