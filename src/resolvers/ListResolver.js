const ListResolver = {
  Query: {
    list: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getList(id);
      return response.data;
    },
    listBySlug: async (_, { slug }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getListBySlug(slug);
      return response.data;
    },
  },
};

export default ListResolver;
