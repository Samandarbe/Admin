import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Новый проэкт на несте")
    .setDescription("Full Rest API")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(await app, config);

  SwaggerModule.setup(
    "/api/docs",
    await app,
    document
  );
  (await app).listen(PORT, () => console.log("Server running " + PORT));
}

start();
