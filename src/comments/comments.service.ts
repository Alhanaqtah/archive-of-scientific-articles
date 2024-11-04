import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comments.model';
import { Article } from '../articles/articles.model';
import { User } from '../users/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getCommentsByArticleId(articleUuid: string): Promise<Partial<Object[]>> {
    const article = await this.articleRepository.findOne({ where: { id: articleUuid } });
    if (!article) {
      throw new NotFoundException('Статья не найдена');
    }

    const comments = await this.commentRepository.find({ 
      where: { article: { id: articleUuid } }, 
      relations: ['author'] 
    });

    return comments.map(comment => ({
      ...comment,
      author: comment.author.id
    }));
  }

  async createComment(commentData: { userId: string, articleId: string; text: string }): Promise<Object> {
    const article = await this.articleRepository.findOne({ where: { id: commentData.articleId } });
    if (!article) {
      throw new NotFoundException('Статья не найдена');
    }

    const user = await this.userRepository.findOne({ where: { id: commentData.userId } });
    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    const newComment = this.commentRepository.create({
      text: commentData.text,
      article: article,
      author: user,
    });

    const savedComment = await this.commentRepository.save(newComment);
    return {
      id: savedComment.id,
      authorId: savedComment.author.id,
      text: savedComment.text,
      created_at: savedComment.created_at,
    };
  }
}
