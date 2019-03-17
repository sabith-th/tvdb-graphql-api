const SearchResolver = {
  Query: {
    searchSeries: async (_, { name }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.searchSeries(name);
      return response.data;
    }
  }
};

export default SearchResolver;
