import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { ScheduleService } from '../service/schedule.service';
import { Schedule } from '../schedule.entity';
import { UpdateResult } from 'typeorm';

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Get()
  async getAll(): Promise<Schedule[]> {
    return await this.scheduleService.getAll();
  }

  @Get(':id')
  async getOne(@Param() param: { id: number }): Promise<Schedule> {
    return await this.scheduleService.getOne(param.id);
  }

  @Post()
  async create(@Body() schedule: Schedule): Promise<Schedule> {
    // console.log("shcedule: ", schedule)
    // console.log('schedule professional id: ', schedule.professional)
    return await this.scheduleService.create(schedule);
  }

  @Delete(':id')
  async delete(@Param() id: number): Promise<Schedule[]> {
    return await this.scheduleService.delete(id);
  }

  @Put(':id')
  async update(
    @Param() id: number,
    @Body() schedule: Schedule,
  ): Promise<UpdateResult> {
    return await this.scheduleService.update(id, schedule);
  }
}
