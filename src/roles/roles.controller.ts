import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { User } from 'src/users/user.model';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

// @UseGuards(RolesGuard)
@Roles('admin')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @Get()
    getAll() {
        return this.roleService.getAll();
    }

    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.roleService.create(roleDto);
    }

    @Put(':id')
    update(@Param('id') roleId: string, @Body() roleDto: CreateRoleDto) {
        return this.roleService.update(roleId, roleDto);
    }

    @Delete(':id')
    delete(@Param('id') roleId: string) {
        return this.roleService.remove(roleId);
    }
}
