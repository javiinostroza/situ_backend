import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from '../patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient) private PatientRepository: Repository<Patient>,
  ) {}

  async getAll(): Promise<Patient[]> {
    return await this.PatientRepository.find();
  }

  async getOne(id: number): Promise<Patient> {
    return await this.PatientRepository.findOneBy({
      id: id,
    });
  }

  async create(patient: Patient): Promise<Patient> {
    return await this.PatientRepository.save(patient);
  }
  async delete(id: number): Promise<Patient[]> {
    await this.PatientRepository.delete(id);
    return await this.PatientRepository.find();
  }
}
