const EpisodeResolver = {
  Query: {
    episode: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getEpisode(id);
      return response.data;
    }
  }
};

export default EpisodeResolver;
