import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Schedule } from '../schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private ScheduleRepository: Repository<Schedule>,
  ) {}

  async getAll(): Promise<Schedule[]> {
    return await this.ScheduleRepository.find();
  }
  async getOne(id: number): Promise<Schedule> {
    return await this.ScheduleRepository.findOneBy({
      id: id,
    });
  }
  async create(schedule: Schedule): Promise<Schedule> {
    return await this.ScheduleRepository.save(schedule);
  }
  async delete(id: number): Promise<Schedule[]> {
    await this.ScheduleRepository.delete(id);
    return await this.ScheduleRepository.find();
  }
  async update(id: number, schedule: Schedule): Promise<UpdateResult> {
    return await this.ScheduleRepository.update(id, schedule);
  }
}
