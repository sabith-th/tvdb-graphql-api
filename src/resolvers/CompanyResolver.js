const CompanyResolver = {
  Query: {
    company: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getCompany(id);
      return response.data;
    },
  },
};

export default CompanyResolver;
