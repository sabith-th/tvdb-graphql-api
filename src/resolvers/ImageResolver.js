const ImageResolver = {
  Query: {
    seriesImages: async (_, { seriesId, keyType, subKey, resolution }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getImages(seriesId, keyType, subKey, resolution);
      return response.data;
    },
  },
};

export default ImageResolver;
