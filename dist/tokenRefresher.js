'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setNewToken = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _nodeCron = require('node-cron');

var _nodeCron2 = _interopRequireDefault(_nodeCron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const setNewToken = exports.setNewToken = async () => {
  console.log('Setting new token');
  const tvdbAPI = 'https://api.thetvdb.com/login';
  const apiKey = process.env.API_KEY;
  const userKey = process.env.USER_KEY;
  const userName = process.env.USERNAME;
  try {
    const response = await _axios2.default.post(tvdbAPI, {
      apikey: apiKey,
      userkey: userKey,
      username: userName
    });
    if (response.status === 200) {
      process.env.TOKEN = response.data.token;
      console.log('New token set');
    }
  } catch (e) {
    console.log('Error getting new token', e);
  }
};

const task = _nodeCron2.default.schedule('0 0 * * *', async () => {
  console.info('Getting new token');
  setNewToken();
});

exports.default = task;