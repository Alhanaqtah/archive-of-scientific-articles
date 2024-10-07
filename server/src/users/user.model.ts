import { Role } from "src/roles/roles.model";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "../articles/articles.model";
import { Favourite } from "src/favourites/favourites.model";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'varchar', unique: true, nullable: false})
    email: string

    @Column({type: 'bytea', name: 'pass_hash'})
    password: string

    @OneToMany(() => Article, article => article.author)
    articles: Article[] 

    @Column({type: 'boolean', default: true})
    is_active: boolean
    
    @ManyToMany(type => Role, role => role.users, {onDelete: 'CASCADE'})
    @JoinTable({name: 'users_roles'})
    roles: Role[]    

    @OneToMany(() => Favourite, favourite => favourite.user)
    favourites: Favourite[]
}