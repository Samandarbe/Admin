import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Roles } from "./roles.model";

interface RolesCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: "user_roles",createdAt:false,updatedAt:false })
export class User_Roles extends Model<User_Roles, RolesCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Roles)
  @Column({
    type: DataType.INTEGER,
  })
  roleId: number;
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;
}
