import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './roles.model';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Role) private roleRepo: Repository<Role>) {}

    async getAll() {
        try {
            const roles: Role[] = await this.roleRepo.find();
            return roles;
        } catch (error) {
            throw new HttpException('Failed to get all roles', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async create(roleDto: CreateRoleDto) {
        const role = await this.getRoleByValue(roleDto.value);
        if (role) {
            throw new HttpException('Role already exists', HttpStatus.CONFLICT);
        }

        const newRole = this.roleRepo.create(roleDto);
        return await this.roleRepo.save(newRole);
    }

    async update(roleId: string, roleDto: CreateRoleDto) {
        this.roleRepo.update(roleId, {...roleDto})
        return roleDto;
    }

    async remove(roleId: string) {
        this.roleRepo.delete(roleId)
    }

    async findRolesByIds(roleIds: string[]): Promise<Role[]> {
        return this.roleRepo.findByIds(roleIds);
    }

    async getRoleByValue(value: string): Promise<Role> {
        const role = await this.roleRepo.findOne({where: {value}});
        return role
    }
}
