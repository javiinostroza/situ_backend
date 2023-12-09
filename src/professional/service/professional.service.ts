import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professional } from '../professional.entity';

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectRepository(Professional)
    private ProfessionalRepository: Repository<Professional>,
  ) {}

  async getAll(): Promise<Professional[]> {
    return await this.ProfessionalRepository.find();
  }

  async getOne(id: number): Promise<Professional> {
    return await this.ProfessionalRepository.findOneBy({
      id: id,
    });
  }

  async create(professional: Professional): Promise<Professional> {
    return await this.ProfessionalRepository.save(professional);
  }

  async delete(id: number): Promise<Professional[]> {
    await this.ProfessionalRepository.delete(id);
    return await this.ProfessionalRepository.find();
  }
}
