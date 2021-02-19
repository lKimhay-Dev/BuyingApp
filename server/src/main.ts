import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true });

  const config = new DocumentBuilder()
    // .addBearerAuth()
    .setTitle('My API')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const options: SwaggerDocumentOptions =  {
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
