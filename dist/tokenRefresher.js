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

const setNewToken = exports.setNewToken = () => {
  const tvdbAPI = 'https://api.thetvdb.com/login';
  const apiKey = process.env.API_KEY;
  const userKey = process.env.USER_KEY;
  const userName = process.env.USERNAME;
  _axios2.default.post(tvdbAPI, {
    apikey: apiKey,
    userkey: userKey,
    username: userName
  }).then(res => {
    process.env.TOKEN = res.data.token;
  }).catch(err => console.log(err));
};

const task = _nodeCron2.default.schedule('0 0 * * *', async () => {
  console.info('Getting new token');
  setNewToken();
});

exports.default = task;