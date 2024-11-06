import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationError } from 'class-validator';
import { AppModule } from './app.module';
import { ChargeResponseDto } from './dtos/charge.response.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Product Provider')
    .setVersion('1.0')
    .addTag('product-provider')
    .addBearerAuth({
      type: 'http',
      in: 'header',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    // Εδώ προσθέτουμε τα extra μοντέλα που δεν εμφανίζονται στο swagger αυτόματα
    extraModels: [ChargeResponseDto],
  });
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  // Make use of class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      exceptionFactory: (errors: ValidationError[]) => {
        console.log(errors);
        return new BadRequestException('Validation error');
      },
      transform: true,
    }),
  );

  const port = process.env.PORT || 3001;
  await app.listen(port);
}
bootstrap();
