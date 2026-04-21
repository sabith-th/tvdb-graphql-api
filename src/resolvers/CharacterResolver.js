const CharacterResolver = {
  Query: {
    character: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getCharacter(id);
      return response.data;
    },
  },
};

export default CharacterResolver;
