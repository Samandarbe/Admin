import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { createUserDto } from 'src/users/dto/create.user.dto';
import { AuthService } from './auth.service';

@ApiTags('Авторизатция')
@Controller('auth')
export class AuthController {

	constructor(private readonly authUserServise:AuthService) {}

	@Post('/login')
	async login(@Body() userDto: createUserDto){
		return this.authUserServise.loginService(userDto)

	}
	@Post('/registration')
	async register(@Body() userDto: createUserDto){
		return this.authUserServise.registerService(userDto);
		
	}
	
}
