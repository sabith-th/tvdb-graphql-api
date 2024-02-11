"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const ImageResolver = {
  Query: {
    seriesImages: async (_, {
      id,
      lang,
      type
    }, {
      dataSources
    }) => {
      const response = await dataSources.tvdbAPI.getImages(id, lang, type);
      return response.data.artworks;
    }
  }
};
var _default = exports.default = ImageResolver;