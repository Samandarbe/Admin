import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { createUserDto } from "src/users/dto/create.user.dto";
import { UsersService } from "src/users/users.service";
import * as bycript from "bcryptjs";
import { User } from "src/users/users.model";
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}
  async loginService(userDto: createUserDto) {
    const user = await this.validatUser(userDto);
    return  this.generetToken(user);
  }

  async registerService(userDto: createUserDto) {
    const condidate = await this.userService.getByEmail(userDto.email);
    if (condidate) {
      throw new HttpException("User alredy register", HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bycript.hash(userDto.password, 5);
    const user = await this.userService.create({
      ...userDto,
      password: hashPassword,
    });
    return this.generetToken(user);
  }
  private async generetToken(user: User) {
    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validatUser(userDto: createUserDto) {
    const user = await this.userService.getByEmail(userDto.email);
	const passwordHash = await bycript.compare(userDto.password,user.password)
	if(user && passwordHash){
		return user

	}
	throw new UnauthorizedException({message:'Email or password in required'})
  }
}
