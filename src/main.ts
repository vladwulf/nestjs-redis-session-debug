import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { createClient } from 'redis';
import RedisStore from 'connect-redis';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Initialize client.
  const redisClient = createClient();
  redisClient.connect().catch(console.error);

  // Initialize store.
  const redisStore = new RedisStore({
    client: redisClient,
  });

  // Initialize sesssion storage.
  app.use(
    session({
      store: redisStore,
      resave: false, // required: force lightweight session keep alive (touch)
      saveUninitialized: false, // recommended: only save session when data exists
      secret: 'keyboard cat',
    }),
  );

  await app.listen(3333);
}
bootstrap();
