import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { RolesService } from "src/roles/roles.service";
import { createUserDto } from "./dto/create.user.dto";
import { User } from "./users.model";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleServise: RolesService
  ) {}

  async create(dto: createUserDto) {
    const user = await this.userRepository.create(dto);
    return user
  }

  async getAll() {
    const users = this.userRepository.findAll();
    return users;
  }
}
