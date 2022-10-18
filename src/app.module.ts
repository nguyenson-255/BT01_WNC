import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorModel } from './actors/actor.module';
import { ActorEntity } from './actors/actor';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [ActorEntity],
      synchronize: false,
    }),
    ActorModel,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
