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
}

export default TvdbAPI;
