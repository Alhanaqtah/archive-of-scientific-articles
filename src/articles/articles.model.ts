import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../users/user.model';
import { Comment } from '../comments/comments.model';
@Entity()
export class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({nullable: true})
  annotation: string;

  @Column('bytea')
  blob: Buffer;

  @ManyToOne(() => User, user => user.articles)
  author: User;

  @Column()
  sci_area: string;

  @Column('simple-array')
  keywords: string[]; 

  @OneToMany(() => Comment, comment => comment.article)
  comments: Comment[];
}

