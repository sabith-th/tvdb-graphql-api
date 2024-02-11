const seriesResolver = {
  Query: {
    series: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getSeries(id);
      return response.data;
    },
    seriesInfo: async (_, { id }) => ({ id }),
  },
  SeriesResponse: {
    series: async (parent, _, { dataSources }) => {
      const { id } = parent;
      const response = await dataSources.tvdbAPI.getSeries(id);
      return response.data;
    },
    nextEpisode: async (parent, _, { dataSources }) => {
      let nextEpisode = null;
      const { id } = parent;
      const nextAired = await dataSources.tvdbAPI.getSeriesNextAired(id);
      if (nextAired.data && nextAired.data.nextAired) {
        const episodes = await dataSources.tvdbAPI.getEpisodes({
          id,
          airDate: nextAired.data.nextAired,
        });
        if (episodes.data && episodes.data.episodes.length > 0) {
          [nextEpisode] = episodes.data.episodes;
        }
      }
      return nextEpisode;
    },
  },
};

export default seriesResolver;
