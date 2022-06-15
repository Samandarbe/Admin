import { Module } from "@nestjs/common";
import {SequelizeModule} from '@nestjs/sequelize'
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config'
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Roles } from "./roles/roles.model";
import { User_Roles } from "./roles/user.roles.model";
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User,Roles,User_Roles],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
  ],
})
export class AppModule {}