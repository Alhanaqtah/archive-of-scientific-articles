import { User } from "src/users/user.model";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'roles'})
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'varchar'})
    value: string

    @Column({type: 'text'})
    description: string

    @ManyToMany(type => User, user => user.roles)
    users: User[]
}