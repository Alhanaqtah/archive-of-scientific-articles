import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../users/user.model';
import { Article } from '../articles/articles.model';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  author: User;

  @ManyToOne(() => Article, article => article.comments)
  article: Article;

  @Column('text')
  text: string;

  @CreateDateColumn()
  created_at: Date;
}

