import { RESTDataSource } from '@apollo/datasource-rest';

class TvdbAPI extends RESTDataSource {
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
    return this.post('login', { body: { apikey } });
  }

  async searchSeries(name) {
    return this.get(`search?query=${name}&type=series`);
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

  async getEpisodes({ id, season, episodeNumber, airDate, seasonType = 'default', page = 0 }) {
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

  async getMovie(id) {
    return this.get(`movies/${id}/extended`);
  }

  async getMovieBySlug(slug) {
    return this.get(`movies/slug/${slug}`);
  }

  async searchMovies(name) {
    return this.get(`search?query=${name}&type=movie`);
  }

  async getSeason(id) {
    return this.get(`seasons/${id}/extended`);
  }

  async getPerson(id) {
    return this.get(`people/${id}/extended`);
  }

  async getList(id) {
    return this.get(`lists/${id}/extended`);
  }

  async getListBySlug(slug) {
    return this.get(`lists/slug/${slug}`);
  }

  async getSeriesBySlug(slug) {
    return this.get(`series/slug/${slug}`);
  }

  async filterSeries({ country, lang, genre, year, company, status, sort, sortType, page = 0 }) {
    const params = new URLSearchParams({ country, lang, page });
    if (genre) params.append('genre', genre);
    if (year) params.append('year', year);
    if (company) params.append('company', company);
    if (status) params.append('status', status);
    if (sort) params.append('sort', sort);
    if (sortType) params.append('sortType', sortType);
    return this.get(`series/filter?${params.toString()}`);
  }

  async getAward(id) {
    return this.get(`awards/${id}/extended`);
  }

  async getAwardCategory(id) {
    return this.get(`awards/categories/${id}/extended`);
  }

  async getCompany(id) {
    return this.get(`companies/${id}`);
  }

  async getCharacter(id) {
    return this.get(`characters/${id}`);
  }

  async getSeriesTranslation(id, language) {
    return this.get(`series/${id}/translations/${language}`);
  }

  async getMovieTranslation(id, language) {
    return this.get(`movies/${id}/translations/${language}`);
  }

  async getEpisodeTranslation(id, language) {
    return this.get(`episodes/${id}/translations/${language}`);
  }

  async getSeasonTranslation(id, language) {
    return this.get(`seasons/${id}/translations/${language}`);
  }

  async getPeopleTranslation(id, language) {
    return this.get(`people/${id}/translations/${language}`);
  }

  async searchByRemoteId(remoteId) {
    return this.get(`search/remoteid/${remoteId}`);
  }
}

export default TvdbAPI;
