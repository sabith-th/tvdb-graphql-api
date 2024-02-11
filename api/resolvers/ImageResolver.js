const ImageResolver = {
  Query: {
    seriesImages: async (_, { id, lang, type }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getImages(id, lang, type);
      return response.data.artworks;
    },
  },
};

export default ImageResolver;
