import { createClient } from "redis";

const client = createClient({
   url: process.env.REDIS_URI 
})

client.on('error', err => console.log('Redis Client Error', err));

export async function testRedisConnection() {

  try {
    await client.connect();
    console.log('Connected to Redis');
  } catch (error) {
    console.error(error);
  }finally {
    await client.quit();
  }
}


