const PersonResolver = {
  Query: {
    person: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getPerson(id);
      return response.data;
    },
  },
};

export default PersonResolver;
