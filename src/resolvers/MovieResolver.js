const MovieResolver = {
  Query: {
    movie: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getMovie(id);
      return response.data;
    },
    movieBySlug: async (_, { slug }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getMovieBySlug(slug);
      return response.data;
    },
    searchMovies: async (_, { name }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.searchMovies(name);
      return response.data;
    },
  },
};

export default MovieResolver;
