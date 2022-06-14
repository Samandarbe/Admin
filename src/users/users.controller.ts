import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createUserDto } from './dto/create.user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users ')
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: "New User" })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() body: createUserDto) {
    return this.usersService.create(body);
  }

  @ApiOperation({ summary: "New User" })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.usersService.getAll();
  }
}
