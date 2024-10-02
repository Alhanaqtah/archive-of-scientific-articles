import { IsNotEmpty, IsString } from "class-validator"

export class CreateRoleDto {
    @IsString()
    @IsNotEmpty()
    readonly value: string

    @IsString()
    @IsNotEmpty()
    readonly description: string
}