import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'actor' })
export class ActorEntity {
  @PrimaryColumn()
  actor_id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  // @Column()
  // last_update: string;
}