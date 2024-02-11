"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _datasourceRest = require("@apollo/datasource-rest");
class TvdbAPI extends _datasourceRest.RESTDataSource {
  constructor(options) {
    super(options);
    this.token = options.token;
    this.baseURL = 'https://api4.thetvdb.com/v4/';
  }
  willSendRequest(_path, request) {
    request.headers.Authorization = `Bearer ${this.token}`;
  }
  async getSeries(id) {
    return this.get(`series/${id}/extended`);
  }
  async login(apikey) {
    return this.post('login', {
      body: {
        apikey
      }
    });
  }
  async searchSeries(name) {
    return this.get(`search?query=${name}&type=series`);
  }
  async getActors(id) {
    return this.get(`series/${id}/actors`);
  }
  async getSummary(id) {
    return this.get(`series/${id}/episodes/summary`);
  }
  async getEpisode(id) {
    return this.get(`episodes/${id}/extended`);
  }
  async getImages(id, lang, type) {
    const params = new URLSearchParams();
    if (lang) {
      params.append('lang', lang);
    }
    if (type) {
      params.append('type', type);
    }
    const urlPathWithQuery = `series/${id}/artworks?${params.toString()}`;
    return this.get(urlPathWithQuery);
  }
  async getEpisodes({
    id,
    season,
    episodeNumber,
    airDate,
    seasonType = 'default',
    page = 0
  }) {
    const params = new URLSearchParams();
    if (season) {
      params.append('season', season);
    }
    if (episodeNumber) {
      params.append('episodeNumber', episodeNumber);
    }
    if (airDate) {
      params.append('airDate', airDate);
    }
    const query = `series/${id}/episodes/${seasonType}?page=${page}&${params.toString()}`;
    return this.get(query);
  }
  async getSeriesNextAired(id) {
    return this.get(`series/${id}/nextAired`);
  }
}
var _default = exports.default = TvdbAPI;