import { testRedisConnection } from './cache'
import app from './app';
import './database';

app.listen(8000, () => {    
  testRedisConnection();
  console.log('Server listening on port 8000');
});

