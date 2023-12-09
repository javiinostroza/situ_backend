import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { ProfessionalService } from '../service/professional.service';
import { Professional } from '../professional.entity';

@Controller('professional')
export class ProfessionalController {
  constructor(private professionalService: ProfessionalService) {}

  @Get()
  async getAll(): Promise<Professional[]> {
    return await this.professionalService.getAll();
  }

  @Get(':id')
  async getOne(@Param() param: { id: number }): Promise<Professional> {
    return await this.professionalService.getOne(param.id);
  }

  @Post()
  async create(@Body() professional: Professional): Promise<Professional> {
    return await this.professionalService.create(professional);
  }

  @Delete(':id')
  async delete(@Param() id: number): Promise<Professional[]> {
    return await this.professionalService.delete(id);
  }
}
