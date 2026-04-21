const TranslationResolver = {
  Query: {
    seriesTranslation: async (_, { id, language }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getSeriesTranslation(id, language);
      return response.data;
    },
    movieTranslation: async (_, { id, language }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getMovieTranslation(id, language);
      return response.data;
    },
    episodeTranslation: async (_, { id, language }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getEpisodeTranslation(id, language);
      return response.data;
    },
    seasonTranslation: async (_, { id, language }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getSeasonTranslation(id, language);
      return response.data;
    },
    peopleTranslation: async (_, { id, language }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getPeopleTranslation(id, language);
      return response.data;
    },
  },
};

export default TranslationResolver;
