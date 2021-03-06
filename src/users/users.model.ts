import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model,Table } from 'sequelize-typescript'
import { Roles } from 'src/roles/roles.model';
import { User_Roles } from 'src/roles/user.roles.model';

interface UserCreationAttrs {
	email:string
	password:string
	role:string

}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Uniq id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: "samandarbeksamiye1999@gmail.com",
    description: "Uniq email",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;
  @ApiProperty({ example: "12345678", description: "Segurty" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  @ApiProperty({ example: "true", description: "Ban end no" })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  banned: boolean;
  @ApiProperty({ example: "true", description: "Ban end no" })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  banReason: boolean;
  

  @BelongsToMany(() => Roles, () => User_Roles)
  users: Roles[];
}