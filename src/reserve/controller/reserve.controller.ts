import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { ReserveService } from '../service/reserve.service';
import { Reserve } from '../reserve.entity';

@Controller('reserve')
export class ReserveController {
  constructor(private reserveService: ReserveService) {}

  @Get()
  async getAll(): Promise<Reserve[]> {
    return await this.reserveService.getAll();
  }

  @Get(':id')
  async getOne(@Param() param: { id: number }): Promise<Reserve> {
    return await this.reserveService.getOne(param.id);
  }

  @Post()
  async create(@Body() reserve: Reserve): Promise<Reserve> {
    return await this.reserveService.create(reserve);
  }

  @Delete(':id')
  async delete(@Param() id: number): Promise<Reserve[]> {
    return await this.reserveService.delete(id);
  }
}
