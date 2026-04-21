const AwardResolver = {
  Query: {
    award: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getAward(id);
      return response.data;
    },
    awardCategory: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getAwardCategory(id);
      return response.data;
    },
  },
};

export default AwardResolver;
