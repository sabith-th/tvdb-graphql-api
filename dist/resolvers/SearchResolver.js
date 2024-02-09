"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const SearchResolver = {
  Query: {
    searchSeries: async (_, {
      name
    }, {
      dataSources
    }) => {
      const response = await dataSources.tvdbAPI.searchSeries(name);
      return response.data;
    }
  }
};
var _default = exports.default = SearchResolver;