const SearchResolver = {
  Query: {
    searchSeries: async (_, { name }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.searchSeries(name);
      return response.data;
    },
    searchByRemoteId: async (_, { remoteId }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.searchByRemoteId(remoteId);
      return response.data;
    },
  },
};

export default SearchResolver;
