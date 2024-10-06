import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { User } from 'src/users/user.model';
import { Article } from 'src/articles/articles.model';
import { Comment } from './comments.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Article, User])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
