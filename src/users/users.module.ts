import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Roles } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { RolesService } from 'src/roles/roles.service';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[SequelizeModule.forFeature([User,Roles]),RolesModule]
})
export class UsersModule {}
