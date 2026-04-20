import { Redis } from '@upstash/redis';
import axios from 'axios';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_KV_REST_API_URL,
  token: process.env.UPSTASH_REDIS_KV_REST_API_TOKEN,
});
const TOKEN_KEY = 'tvdb_token';
const TOKEN_TTL_SECONDS = 23 * 60 * 60; // 23h, within TVDB's 24h expiry

export const getToken = async () => {
  const cached = await redis.get(TOKEN_KEY);
  if (cached) return cached;

  const response = await axios.post('https://api4.thetvdb.com/v4/login', {
    apikey: process.env.API_KEY,
  });

  if (response.status !== 200) {
    throw new Error(`TVDB login failed: ${response.status}`);
  }

  const { token } = response.data.data;
  await redis.set(TOKEN_KEY, token, { ex: TOKEN_TTL_SECONDS });
  return token;
};
