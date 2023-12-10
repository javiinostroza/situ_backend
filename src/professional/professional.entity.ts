import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Profession } from 'src/profession/profession.entity';
import { Schedule } from 'src/schedule/schedule.entity';

@Entity()
export class Professional {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @ManyToOne(() => Profession, (profession) => profession.professionals, {
    onDelete: 'CASCADE',
  })
  public profession?: Profession;

  @OneToMany(() => Schedule, (schedule) => schedule.professional, {
    cascade: true,
  })
  public schedules: Schedule[];
}
