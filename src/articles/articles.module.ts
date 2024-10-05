import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './articles.model';
import { User } from 'src/users/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([Article, User])],
  controllers: [ArticlesController],
  providers: [ArticlesService]
})
export class ArticlesModule {}
