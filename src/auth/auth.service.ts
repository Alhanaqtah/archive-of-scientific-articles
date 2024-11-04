import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private userSevice: UsersService,
                private jwtService: JwtService
    ) {}

    async createUser(userDto: CreateUserDto) {
        const user = await this.userSevice.createUser({...userDto, roles: []});
        const token = this.generateToken(user);
        return token;
    }

    async login(userDto: CreateUserDto) {
        const user = await this.userSevice.findUserByEmail(userDto.email);
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        const match = await bcryptjs.compare(userDto.password, String(user.password));
        if (!match) {
            throw new HttpException('Invalid credentials', HttpStatus.FORBIDDEN);
        }
 
        const token = this.generateToken(user);

        return token;
    }

    generateToken(user: User) {
        return {
            token: this.jwtService.sign({
                sub: user.id,
                roles: user.roles.map(role => role.value)
            })
        }
    }
}
