import { Reserve } from 'src/reserve/reserve.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  rut: string;

  @OneToMany(() => Reserve, (reserve) => reserve.patient, {
    cascade: true,
  })
  public reserves: Reserve[];
}
