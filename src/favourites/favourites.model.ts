import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.model';
import { Article } from '../articles/articles.model';

@Entity({name: 'favourites'})
export class Favourite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.favourites)
  user: User;

  @ManyToOne(() => Article) 
  article: Article;
}
