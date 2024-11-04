import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    // // @UseGuards(RolesGuard)
    // @Roles('admin')
    // @Post()
    // async create(@Body() userDto: CreateUserDto) {
    //     return this.userService.createUser(userDto);
    // }

    // @UseGuards(RolesGuard)
    // @Roles('admin')
    @Get(':id')
    async read(@Param('id') userId: string) {
        return this.userService.read(userId);
    }

    // // @UseGuards(RolesGuard)
    // @Roles('admin')
    // @Patch(':id')
    // async update(@Param('id') userId: string, @Body() userDto: CreateUserDto) {
    //     return this.userService.update(userId, userDto);
    // }

    // // @UseGuards(RolesGuard)
    // @Roles('admin')
    // @Delete(':id')
    // async delete(@Param('id') userId: string) {
    //     // return this.userService.remove(userId);
    // }
}
