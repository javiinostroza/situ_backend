import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profession } from '../profession.entity';
import { Professional } from 'src/professional/professional.entity';

@Injectable()
export class ProfessionService {
  constructor(
    @InjectRepository(Profession)
    private ProfessionRepository: Repository<Profession>,
    @InjectRepository(Professional)
    private ProfessionalRepository: Repository<Professional>,
  ) {}

  async getAll(): Promise<Profession[]> {
    const professions = await this.ProfessionRepository.find();
    for (let index = 0; index < professions.length; index++) {
      const professionals = await this.ProfessionalRepository.find({
        relations: {
          profession: true,
        },
        where: {
          profession: {
            id: professions[index].id,
          },
        },
      });
      professions[index].professionals = professionals;
    }
    return professions;
  }

  async getOne(id: number): Promise<Profession> {
    const professionals = await this.ProfessionalRepository.find({
      relations: {
        profession: true,
      },
      where: {
        profession: {
          id: id,
        },
      },
    });
    const profession = await this.ProfessionRepository.findOneBy({
      id: id,
    });
    profession.professionals = professionals;
    return profession;
  }

  async create(profession: Profession): Promise<Profession> {
    return await this.ProfessionRepository.save(profession);
  }
  async delete(id: number): Promise<Profession[]> {
    await this.ProfessionRepository.delete(id);
    return await this.ProfessionRepository.find();
  }
}
