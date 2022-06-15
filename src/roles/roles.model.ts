import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, BelongsToMany, Column, DataType, Model,Table } from 'sequelize-typescript'
import { User } from 'src/users/users.model';
import { User_Roles } from './user.roles.model';

interface RolesCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Roles extends Model<Roles, RolesCreationAttrs> {
  @ApiProperty({ example: "1", description: "Uniq id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: "Admin",
    description: "Roles User",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;
  @ApiProperty({ example: "Adminstrator", description: "Role" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;


  @BelongsToMany(()=>User,()=>User_Roles)
  users:User[]
  
}