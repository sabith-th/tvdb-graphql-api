const ReferenceResolver = {
  Query: {
    genres: async (_, __, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getGenres();
      return response.data;
    },
    genre: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getGenre(id);
      return response.data;
    },
    languages: async (_, __, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getLanguages();
      return response.data;
    },
    countries: async (_, __, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getCountries();
      return response.data;
    },
    contentRatings: async (_, __, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getContentRatings();
      return response.data;
    },
    updates: async (_, args, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getUpdates(args);
      return response.data;
    },
  },
};

export default ReferenceResolver;
