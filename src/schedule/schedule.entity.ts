import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Professional } from 'src/professional/professional.entity';
import { Reserve } from 'src/reserve/reserve.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  startHour: number;

  @Column()
  endHour: number;

  @Column({ default: true })
  available: boolean;

  @ManyToOne(() => Professional, (professional) => professional.schedules, {
    onDelete: 'CASCADE',
  })
  professional: Professional;

  @OneToOne(() => Reserve, (reserve) => reserve.schedule, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  reserve: Reserve;
}
