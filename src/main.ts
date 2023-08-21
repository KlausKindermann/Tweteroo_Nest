import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { appModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(appModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap();