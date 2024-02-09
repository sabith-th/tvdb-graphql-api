const EpisodeResolver = {
  Query: {
    episode: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getEpisode(id);
      return response.data;
    },
    seriesEpisodes: async (
      _,
      { id, season, episodeNumber, airDate, seasonType, page },
      { dataSources },
    ) => {
      const response = await dataSources.tvdbAPI.getEpisodes({
        id,
        season,
        episodeNumber,
        airDate,
        seasonType,
        page,
      });
      return response.data.episodes;
    },
  },
};

export default EpisodeResolver;
