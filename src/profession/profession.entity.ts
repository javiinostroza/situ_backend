import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Professional } from 'src/professional/professional.entity';

@Entity()
export class Profession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Professional, (professional) => professional.profession, {
    cascade: true,
  })
  public professionals: Professional[];
}
