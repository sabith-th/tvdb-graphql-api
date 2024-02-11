const LoginResolver = {
  Mutation: {
    login: async (_, { auth }, { dataSources }) => {
      const { apikey } = auth;
      const response = await dataSources.tvdbAPI.login(apikey);
      return response.data;
    },
  },
};

export default LoginResolver;
