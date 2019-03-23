"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const SearchResolver = {
  Query: {
    searchSeries: async (_, { name }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.searchSeries(name);
      return response.data;
    }
  }
};

exports.default = SearchResolver;