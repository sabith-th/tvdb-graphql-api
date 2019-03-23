"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const ImageResolver = {
  Query: {
    seriesImages: async (_, { seriesId, keyType, subKey, resolution }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getImages(seriesId, keyType, subKey, resolution);
      return response.data;
    }
  }
};

exports.default = ImageResolver;