import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Schedule } from 'src/schedule/schedule.entity';
import { Patient } from 'src/patient/patient.entity';

@Entity()
export class Reserve {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient, (patient) => patient.reserves, {
    onDelete: 'CASCADE',
  })
  public patient?: Patient;

  @OneToOne(() => Schedule, (schedule) => schedule.reserve, {
    onDelete: 'CASCADE',
  })
  public schedule: Schedule;
}
