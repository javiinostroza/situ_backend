import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professional } from '../professional.entity';
import { Schedule } from 'src/schedule/schedule.entity';

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectRepository(Professional)
    private ProfessionalRepository: Repository<Professional>,
    @InjectRepository(Schedule)
    private ScheduleRepository: Repository<Schedule>,
  ) {}

  async getAll(): Promise<Professional[]> {
    const professionals = await this.ProfessionalRepository.find();
    for (let index = 0; index < professionals.length; index++) {
      const schedules = await this.ScheduleRepository.find({
        relations: {
          professional: true,
        },
        where: {
          professional: {
            id: professionals[index].id,
          },
        },
      });
      professionals[index].schedules = schedules;
    }
    return professionals;
  }

  async getOne(id: number): Promise<Professional> {
    const schedules = await this.ScheduleRepository.find({
      relations: {
        professional: true,
      },
      where: {
        professional: {
          id: id,
        },
      },
    });
    const professional = await this.ProfessionalRepository.findOneBy({
      id: id,
    });
    professional.schedules = schedules;
    return professional;
  }

  async create(professional: Professional): Promise<Professional> {
    return await this.ProfessionalRepository.save(professional);
  }

  async delete(id: number): Promise<Professional[]> {
    await this.ProfessionalRepository.delete(id);
    return await this.ProfessionalRepository.find();
  }
}
