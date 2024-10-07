import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Article } from './articles.model';
import { User } from '../users/user.model';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(page: number = 1, limit: number = 10, query?: string): Promise<Article[]> {
    const skip = (page - 1) * limit;
    const where = query ? [
      { title: Like(`%${query}%`) },
      { sci_area: Like(`%${query}%`) },
      { keywords: Like(`%${query}%`) }
    ] : {};
    
    return this.articleRepository.find({
      where,
      skip,
      take: limit,
      relations: ['author'],
    });
  }

  async findOne(id: string): Promise<Article> {
    const article = await this.articleRepository.findOne({
      where: { id },
      relations: ['author'],
    });
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    return article;
  }

  async create(articleData: Partial<Article>): Promise<Object> {
    const article = this.articleRepository.create(articleData);
    if (articleData.author) {
      const author = await this.userRepository.findOne({ where: { id: articleData.author.id } });
      if (!author) {
        throw new NotFoundException('Author not found');
      }
      article.author = author;
    }
    
    if (!articleData.blob) {
      throw new NotFoundException('File not found');
    }
    
    article.blob = articleData.blob;

    await this.articleRepository.save(article);
    return {id: article.id};
  }

  async update(id: string, articleData: Partial<Article>): Promise<void> {
    const article = await this.articleRepository.findOne({ where: { id } });
    if (!article) {
      throw new NotFoundException('Статья не найдена');
    }

    if (articleData.author) {
      const author = await this.userRepository.findOne({ where: { id: articleData.author.id } });
      if (!author) {
        throw new NotFoundException('Автор не найден');
      }
      article.author = author;
    }

    if (articleData.blob) {
      article.blob = articleData.blob;
    }

    Object.assign(article, articleData);

    await this.articleRepository.save(article);
  }

  async remove(id: string): Promise<void> {
    const result = await this.articleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Article not found');
    }
  }
}
