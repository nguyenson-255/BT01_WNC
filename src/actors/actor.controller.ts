import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorEntity } from "./actor";

@Controller('actor')
export class ActorController {
  constructor(private actorService: ActorService) {}

  @Get()
  async findAll() {
    const respose = await this.actorService.findAll();
    return respose;
    // res.json({payload: resposse});
  }

  @Post()
  async addOne(@Body() createActor: ActorEntity) {
    const respose = await this.actorService.addActor(createActor);
    return respose;
    // res.json({payload: resposse});
  }
}
