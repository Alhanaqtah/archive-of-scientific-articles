import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { RolesService } from 'src/roles/roles.service';
import { Role } from 'src/roles/roles.model';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>,
                private roleService: RolesService) {}

    async createUser(dto: CreateUserDto) {
        const potentialUser = await this.findUserByEmail(dto.email);
        if (potentialUser) {
            throw new HttpException('User already exists', HttpStatus.CONFLICT);
        }
        
        let roles: Role[] = [];
        
        for (const roleValue of dto.roles) {
            const role = await this.roleService.getRoleByValue(roleValue);
            if (role) {
                roles.push(role);
            }
        }

        if (roles.length === 0) {
            const defaultRole = await this.roleService.getRoleByValue('user');
            roles.push(defaultRole);
        }

        let passHash = await bcryptjs.hash(dto.password, 5);

        const user = this.userRepo.create({
            ...dto,
            roles: roles,
            password: passHash
        });

        await this.userRepo.save(user);

        delete user.password;

        return user;
    }

    async read(userId: string) {
        const user = await this.userRepo.findOneBy({id: userId});
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        delete user.password;
        
        return user;
    }

    async update(userId: string, userDto: CreateUserDto) {
        const user = await this.userRepo.findOne({ where: { id: userId }, relations: ['roles'] });
    
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
    
        // Check if new email is already taken
        if (userDto.email && userDto.email !== user.email) {
            const existingUser = await this.userRepo.findOne({ where: { email: userDto.email } });
            if (existingUser) {
                throw new HttpException('Email already taken', HttpStatus.BAD_REQUEST);
            }
            user.email = userDto.email;
        }
    
        // Update roles if provided
        if (userDto.roles) {
            const roles = await this.roleService.findRolesByIds(userDto.roles);
            if (roles.length !== userDto.roles.length) {
                throw new HttpException('Roles not found', HttpStatus.BAD_REQUEST);
            }
            user.roles = roles;
        }
    
        // Hash the password before saving
        if (userDto.password) {
            user.password = await bcryptjs.hash(userDto.password, bcryptjs.genSaltSync());
        }
    
        delete user.password;
    
        return this.userRepo.save(user);
    }

    async findUserByEmail(email: string): Promise<User> {
        const user = await this.userRepo.findOne({where: {email}, relations: {roles: true}});
        return user;
    }

    async findUserByID(id: string): Promise<User> {
        const user = await this.userRepo.findOneBy({id: id});
        return user;
    }
}
