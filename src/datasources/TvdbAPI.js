import { RESTDataSource } from 'apollo-datasource-rest';

class TvdbAPI extends RESTDataSource {
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
    const params = Object.assign(
      {},
      keyType && { keyType: keyType.toLowerCase() },
      subKey && { subKey },
      resolution && { resolution }
    );
    return this.get(`series/${id}/images/query`, { ...params });
  }

  async getEpisodes(id, page) {
    const params = Object.assign({}, page && { page });
    return this.get(`series/${id}/episodes`, { ...params });
  }

  async getEpisodesWithQuery(
    id,
    absoluteNumber,
    airedSeason,
    airedEpisode,
    dvdSeason,
    dvdEpisode,
    imdbId,
    page
  ) {
    const params = Object.assign(
      {},
      absoluteNumber && { absoluteNumber },
      airedSeason && { airedSeason },
      airedEpisode && { airedEpisode },
      dvdSeason && { dvdSeason },
      dvdEpisode && { dvdEpisode },
      imdbId && { imdbId },
      page && { page }
    );
    return this.get(`series/${id}/episodes/query`, { ...params });
  }
}

export default TvdbAPI;
