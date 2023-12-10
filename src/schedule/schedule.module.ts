import { Module } from '@nestjs/common';
import { ScheduleService } from './service/schedule.service';
import { ScheduleController } from './controller/schedule.controller';
import { Schedule } from './schedule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule])],
  providers: [ScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule {}
