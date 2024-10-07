import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { Article } from '../articles/articles.model';

@Controller('favourites')
export class FavouritesController {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Get(':userId')
  async getFavourites(
    @Param('userId') userId: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('q') query?: string
  ): Promise<Article[]> {
    return this.favouritesService.getFavourites(userId, page, limit, query);
  }

  @Post(':userId/article/:articleId')
  async addToFavourites(
    @Param('userId') userId: string,
    @Param('articleId') articleId: string
  ): Promise<void> {
    await this.favouritesService.addToFavourites(userId, articleId);
  }
}
