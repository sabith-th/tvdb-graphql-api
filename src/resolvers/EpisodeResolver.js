const EpisodeResolver = {
  Query: {
    episode: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getEpisode(id);
      return response.data;
    },
    seriesEpisodes: async (
      _,
      { id, absoluteNumber, airedSeason, airedEpisode, dvdSeason, dvdEpisode, imdbId, page },
      { dataSources }
    ) => {
      const response = await dataSources.tvdbAPI.getEpisodes({
        id,
        absoluteNumber,
        airedSeason,
        airedEpisode,
        dvdSeason,
        dvdEpisode,
        imdbId,
        page
      });
      return response.data;
    }
  }
};

export default EpisodeResolver;
