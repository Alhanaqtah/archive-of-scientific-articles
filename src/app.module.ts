import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roles/roles.model';
import { User } from './users/user.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3001,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [User, Role],
      synchronize: true,
      autoLoadEntities: true
    }),
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
