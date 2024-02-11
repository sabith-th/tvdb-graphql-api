import axios from 'axios';
import cron from 'node-cron';

export const setNewToken = async () => {
  console.log('Setting new token');
  const tvdbAPI = 'https://api4.thetvdb.com/v4/login';
  const apiKey = process.env.API_KEY;
  try {
    const response = await axios.post(tvdbAPI, {
      apikey: apiKey,
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

const task = cron.schedule('0 0 * * *', async () => {
  console.info('Getting new token');
  setNewToken();
});

export default task;
