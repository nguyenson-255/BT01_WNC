import { Column, PrimaryGeneratedColumn, Repository } from "typeorm";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActorEntity } from './actor';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(ActorEntity)
    private actorRepository: Repository<ActorEntity>,
  ) {}

  findAll(): Promise<ActorEntity[]> {
    return this.actorRepository.find();
  }

  addActor(actor: ActorEntity): Promise<ActorEntity> {
    return this.actorRepository.save(actor);
  }
}
