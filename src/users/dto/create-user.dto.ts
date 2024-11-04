import { IsEmail, IsNotEmpty, IsString, IsArray } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @IsArray()
    @IsString({ each: true })
    readonly roles: string[];
}
