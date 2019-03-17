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
}

export default TvdbAPI;
