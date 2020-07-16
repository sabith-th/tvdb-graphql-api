const LoginResolver = {
  Query: {
    refreshToken: async (_, __, { dataSources }) => {
      const response = await dataSources.tvdbAPI.refreshToken();
      return response;
    },
  },
  Mutation: {
    login: async (_, { auth }, { dataSources }) => {
      const { apikey, userkey, username } = auth;
      const response = await dataSources.tvdbAPI.login(apikey, userkey, username);
      return response;
    },
  },
};

export default LoginResolver;
