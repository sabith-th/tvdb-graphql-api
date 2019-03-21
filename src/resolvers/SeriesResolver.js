const seriesResolver = {
  Query: {
    series: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getSeries(id);
      return response.data;
    },
    seriesInfo: async (_, { id }) => ({ id })
  },
  SeriesResponse: {
    series: async (parent, _, { dataSources }) => {
      const { id } = parent;
      const response = await dataSources.tvdbAPI.getSeries(id);
      return response.data;
    },
    actors: async (parent, _, { dataSources }) => {
      const { id } = parent;
      const response = await dataSources.tvdbAPI.getActors(id);
      return response.data;
    },
    episodesSummary: async (parent, _, { dataSources }) => {
      const { id } = parent;
      const response = dataSources.tvdbAPI.getSummary(id);
      return response.data;
    },
    images: async (parent, { keyType, subKey, resolution }, { dataSources }) => {
      const { id } = parent;
      const response = await dataSources.tvdbAPI.getImages(id, keyType, subKey, resolution);
      return response.data;
    },
    episodes: async (
      parent,
      { absoluteNumber, airedSeason, airedEpisode, dvdSeason, dvdEpisode, imdbId, page },
      { dataSources }
    ) => {
      const { id } = parent;
      const response = await dataSources.tvdbAPI.getEpisodes(
        id,
        absoluteNumber,
        airedSeason,
        airedEpisode,
        dvdSeason,
        dvdEpisode,
        imdbId,
        page
      );
      return response.data;
    }
  }
};

export default seriesResolver;
