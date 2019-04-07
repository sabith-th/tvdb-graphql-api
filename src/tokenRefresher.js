import axios from 'axios';
import cron from 'node-cron';

export const setNewToken = () => {
  const tvdbAPI = 'https://api.thetvdb.com/login';
  const apiKey = process.env.API_KEY;
  const userKey = process.env.USER_KEY;
  const userName = process.env.USERNAME;
  axios
    .post(tvdbAPI, {
      apikey: apiKey,
      userkey: userKey,
      username: userName
    })
    .then(res => {
      process.env.TOKEN = res.data.token;
    })
    .catch(err => console.log(err));
};

const task = cron.schedule('0 0 * * *', async () => {
  console.info('Getting new token');
  setNewToken();
});

export default task;
