"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const LoginResolver = {
  Mutation: {
    login: async (_, {
      auth
    }, {
      dataSources
    }) => {
      const {
        apikey
      } = auth;
      const response = await dataSources.tvdbAPI.login(apikey);
      return response.data;
    }
  }
};
var _default = exports.default = LoginResolver;