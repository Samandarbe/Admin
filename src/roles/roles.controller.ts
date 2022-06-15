import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/roles.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

	constructor(private readonly roleServis:RolesService){}

	@Post()
	async createRole (@Body() dto:CreateRoleDto) {
		return this.roleServis.create(dto)
	}

	@Get('/:value')
	async getByrole(@Param('value') value:string){
		return this.roleServis.getByRole(value )
	}

}
