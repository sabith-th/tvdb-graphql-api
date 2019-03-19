const seriesResolver = {
  Query: {
    series: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getSeries(id);
      return response.data;
    },
    seriesInfo: async (_, { id }, { dataSources }) => {
      const seriesPromise = dataSources.tvdbAPI.getSeries(id);
      const actorsPromise = dataSources.tvdbAPI.getActors(id);
      const summaryPromise = dataSources.tvdbAPI.getSummary(id);
      const [series, actors, summary] = await Promise.all([
        seriesPromise,
        actorsPromise,
        summaryPromise
      ]);
      return {
        series: series.data,
        actors: actors.data,
        episodesSummary: summary.data
      };
    }
  },
  SeriesResponse: {
    seriesImages: async (parent, { keyType, subKey, resolution }, { dataSources }) => {
      const { id } = parent.series;
      const response = await dataSources.tvdbAPI.getImages(id, keyType, subKey, resolution);
      return response.data;
    }
  }
};

export default seriesResolver;
