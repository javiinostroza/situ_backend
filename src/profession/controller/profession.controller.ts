import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { ProfessionService } from '../service/profession.service';
import { Profession } from '../profession.entity';

@Controller('profession')
export class ProfessionController {
  constructor(private professionService: ProfessionService) {}

  @Get()
  async getAll(): Promise<Profession[]> {
    return await this.professionService.getAll();
  }

  @Get(':id')
  async getOne(@Param() param: { id: number }): Promise<Profession> {
    return await this.professionService.getOne(param.id);
  }

  @Post()
  async create(@Body() profession: Profession): Promise<Profession> {
    return await this.professionService.create(profession);
  }

  @Delete(':id')
  async delete(@Param() id: number): Promise<Profession[]> {
    return await this.professionService.delete(id);
  }
}
