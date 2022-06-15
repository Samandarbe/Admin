import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateRoleDto } from "./dto/roles.dto";
import { Roles } from "./roles.model";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Roles) private role: typeof Roles) {}

  async create(dto: CreateRoleDto) {
    return this.role.create(dto);
  }

  async getByRole(value: string) {
    return this.role.findOne({ where: { value } });
  }
}
