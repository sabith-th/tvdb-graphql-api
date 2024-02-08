import { RESTDataSource } from '@apollo/datasource-rest';

class TvdbAPI extends RESTDataSource {
  baseURL = 'https://api4.thetvdb.com/v4/';

  constructor(options) {
    super(options);
    this.token = options.token;
  }

  willSendRequest(_path, request) {
    request.headers['Authorization'] = `Bearer ${this.token}`;
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
    return this.get(`search?query=${name}&type=series`);
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
    const params = {
      ...(keyType && { keyType: keyType.toLowerCase() }),
      ...(subKey && { subKey }),
      ...(resolution && { resolution }),
    };
    return this.get(`series/${id}/images/query`, { ...params });
  }

  async getEpisodes({
    id,
    absoluteNumber,
    airedSeason,
    airedEpisode,
    dvdSeason,
    dvdEpisode,
    imdbId,
    page,
  }) {
    const params = {
      ...(absoluteNumber && { absoluteNumber }),
      ...(airedSeason && { airedSeason }),
      ...(airedEpisode && { airedEpisode }),
      ...(dvdSeason && { dvdSeason }),
      ...(dvdEpisode && { dvdEpisode }),
      ...(imdbId && { imdbId }),
      ...(page && { page }),
    };
    let query;
    const keys = Object.keys(params);
    if (keys.length === 0 || (keys[0] === 'page' && keys.length === 1)) {
      query = `series/${id}/episodes`;
    } else {
      query = `series/${id}/episodes/query`;
    }
    return this.get(query, { ...params });
  }
}

export default TvdbAPI;
