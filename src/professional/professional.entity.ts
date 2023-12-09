import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Profession } from 'src/profession/profession.entity';

@Entity()
export class Professional {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @ManyToOne(() => Profession, (profession) => profession.professionals)
  profession: Profession;
}
