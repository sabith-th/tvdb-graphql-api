'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _apolloDatasourceRest = require('apollo-datasource-rest');

class TvdbAPI extends _apolloDatasourceRest.RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.thetvdb.com/';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getSeries(id) {
    return this.get(`series/${id}`);
  }

  async login(apikey, userkey, username) {
    return this.post('login', { apikey, userkey, username });
  }

  async refreshToken() {
    return this.get('refresh_token');
  }

  async searchSeries(name) {
    return this.get('search/series', { name });
  }

  async getActors(id) {
    return this.get(`series/${id}/actors`);
  }

  async getSummary(id) {
    return this.get(`series/${id}/episodes/summary`);
  }

  async getEpisode(id) {
    return this.get(`episodes/${id}`);
  }

  async getImages(id, keyType, subKey, resolution) {
    const params = Object.assign({}, keyType && { keyType: keyType.toLowerCase() }, subKey && { subKey }, resolution && { resolution });
    return this.get(`series/${id}/images/query`, _extends({}, params));
  }

  async getEpisodes({
    id,
    absoluteNumber,
    airedSeason,
    airedEpisode,
    dvdSeason,
    dvdEpisode,
    imdbId,
    page
  }) {
    const params = Object.assign({}, absoluteNumber && { absoluteNumber }, airedSeason && { airedSeason }, airedEpisode && { airedEpisode }, dvdSeason && { dvdSeason }, dvdEpisode && { dvdEpisode }, imdbId && { imdbId }, page && { page });
    let query;
    const keys = Object.keys(params);
    if (keys.length === 0 || keys[0] === 'page' && keys.length === 1) {
      query = `series/${id}/episodes`;
    } else {
      query = `series/${id}/episodes/query`;
    }
    return this.get(query, _extends({}, params));
  }
}

exports.default = TvdbAPI;