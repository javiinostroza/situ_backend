import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserve } from '../reserve.entity';

@Injectable()
export class ReserveService {
  constructor(
    @InjectRepository(Reserve) private ReserveRepository: Repository<Reserve>,
  ) {}

  async getAll(): Promise<Reserve[]> {
    return await this.ReserveRepository.find();
  }

  async getOne(id: number): Promise<Reserve> {
    return await this.ReserveRepository.findOneBy({
      id: id,
    });
  }

  async create(reserve: Reserve): Promise<Reserve> {
    return await this.ReserveRepository.save(reserve);
  }

  async delete(id: number): Promise<Reserve[]> {
    await this.ReserveRepository.delete(id);
    return await this.ReserveRepository.find();
  }
}
