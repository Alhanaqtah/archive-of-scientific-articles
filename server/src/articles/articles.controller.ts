import { Controller, Get, Post, Patch, Delete, Param, Body, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './articles.model';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getArticles(@Query('page') page: number = 1, @Query('limit') limit: number = 10, @Query('q') query?: string): Promise<Article[]> {
    return this.articlesService.findAll(page, limit, query);
  }

  @Get(':id')
  async getArticle(@Param('id') id: string): Promise<Article> {
    return this.articlesService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createArticle(
    @Body('metadata') metadata: string,
    @UploadedFile() file: Express.Multer.File
  ): Promise<Object> {
    const parsedMetadata = JSON.parse(metadata);
    const articleData = { ...parsedMetadata, blob: file.buffer };
    return this.articlesService.create(articleData);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async updateArticle(
    @Param('id') id: string,
    @Body('metadata') metadata: string,
    @UploadedFile() file?: Express.Multer.File
  ): Promise<void> {
    const parsedMetadata = JSON.parse(metadata);
    const articleData = file 
      ? { ...parsedMetadata, blob: file.buffer }
      : parsedMetadata;
    await this.articlesService.update(id, articleData);
  }

  @Delete(':id')
  async deleteArticle(@Param('id') id: string): Promise<void> {
    await this.articlesService.remove(id);
  }
}
