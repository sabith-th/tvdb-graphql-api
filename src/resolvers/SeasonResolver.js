const SeasonResolver = {
  Query: {
    season: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getSeason(id);
      return response.data;
    },
  },
};

export default SeasonResolver;
