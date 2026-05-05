import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // ← ADICIONE ESTE IMPORT

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // CONFIGURAÇÃO DO SWAGGER
  const config = new DocumentBuilder()
    .setTitle('SCC API')
    .setDescription('API para o Sistema de Controle de Chamados')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Acessível em http://localhost:3000/api

  const port = process.env.PORT ?? 3000;
  await app.listen(port );
  console.log(`🚀 Application is running on: http://localhost:${port}` );
}
bootstrap();
