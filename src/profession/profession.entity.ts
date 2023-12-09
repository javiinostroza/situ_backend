import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Professional } from 'src/professional/professional.entity';

@Entity()
export class Profession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Professional, (professional) => professional.profession)
  professionals: Professional[];
}
