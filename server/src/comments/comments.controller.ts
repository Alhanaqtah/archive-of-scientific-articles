import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comments.model';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(':id')
  async getComments(@Param('id') articleId: string): Promise<Object[]> {
    return this.commentsService.getCommentsByArticleId(articleId);
  }

  @Post()
  async createComment(
    @Body() commentData: { userId: string, articleId: string; text: string }
  ): Promise<Object> {
    return this.commentsService.createComment(commentData);
  }
}
