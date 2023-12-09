import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { PatientService } from '../service/patient.service';
import { Patient } from '../patient.entity';

@Controller('patient')
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Get()
  async getAll(): Promise<Patient[]> {
    return await this.patientService.getAll();
  }

  @Get(':id')
  async getOne(@Param() param: { id: number }): Promise<Patient> {
    return await this.patientService.getOne(param.id);
  }

  @Post()
  async create(@Body() patient: Patient): Promise<Patient> {
    return await this.patientService.create(patient);
  }

  @Delete(':id')
  async delete(@Param() id: number): Promise<Patient[]> {
    return await this.patientService.delete(id);
  }
}
