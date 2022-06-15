import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/users/users.model";
import { RolesController } from "./roles.controller";
import { Roles } from "./roles.model";
import { RolesService } from "./roles.service";
import { User_Roles } from "./user.roles.model";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([Roles,User,User_Roles])],
  exports:[
    RolesService
  ]
})
export class RolesModule {}
