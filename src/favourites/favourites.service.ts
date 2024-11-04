import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favourite } from './favourites.model';
import { Article } from '../articles/articles.model';
import { User } from '../users/user.model';

@Injectable()
export class FavouritesService {
  constructor(
    @InjectRepository(Favourite)
    private favouriteRepository: Repository<Favourite>,
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async getFavourites(userId: string, page: number, limit: number, query?: string): Promise<Article[]> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('Пользователь не найден');
    }

    let queryBuilder = this.favouriteRepository
      .createQueryBuilder('favourite')
      .innerJoinAndSelect('favourite.article', 'article')
      .where('favourite.user = :userId', { userId })
      .skip((page - 1) * limit)
      .take(limit);

    if (query) {
      queryBuilder = queryBuilder.andWhere('article.title ILIKE :query', { query: `%${query}%` });
    }

    const favourites = await queryBuilder.getMany();
    return favourites.map(fav => fav.article);
  }

  async addToFavourites(userId: string, articleId: string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const article = await this.articleRepository.findOne({ where: { id: articleId } });

    if (!user || !article) {
      throw new Error('Пользователь или статья не найдены');
    }

    const existingFavourite = await this.favouriteRepository.findOne({
      where: { user: { id: userId }, article: { id: articleId } }
    });

    if (existingFavourite) {
      throw new Error('Статья уже добавлена в избранное');
    }

    const favourite = new Favourite();
    favourite.user = user;
    favourite.article = article;

    await this.favouriteRepository.save(favourite);
  }
}
