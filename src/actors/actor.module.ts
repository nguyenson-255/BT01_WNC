import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { ActorEntity } from './actor';

@Module({
  imports: [TypeOrmModule.forFeature([ActorEntity])],
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModel {}
