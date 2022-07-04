import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const configService = app.get(ConfigService);
 
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Auth with NestJS')
    .setDescription('API developed with NestJS')
    .setVersion('1.0')
    .build();
 
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('', app, document);
  const port = configService.get('AUTH_PORT_API') ?? 3000;
 
  await app.listen(port);
}
bootstrap();
