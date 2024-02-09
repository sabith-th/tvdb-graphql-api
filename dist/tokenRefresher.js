"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setNewToken = exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _nodeCron = _interopRequireDefault(require("node-cron"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const setNewToken = async () => {
  console.log('Setting new token');
  const tvdbAPI = 'https://api4.thetvdb.com/v4/login';
  const apiKey = process.env.API_KEY;
  try {
    const response = await _axios.default.post(tvdbAPI, {
      apikey: apiKey
    });
    if (response.status === 200) {
      process.env.TOKEN = response.data.data.token;
      console.log('New token set');
    } else {
      console.log(`Token fetching failed with status ${response.status} body : ${response.data}`);
    }
  } catch (e) {
    console.log('Error getting new token', e);
  }
};
exports.setNewToken = setNewToken;
const task = _nodeCron.default.schedule('0 0 * * *', async () => {
  console.info('Getting new token');
  setNewToken();
});
var _default = exports.default = task;