import { Module } from '@nestjs/common';
import { ReserveService } from './service/reserve.service';
import { ReserveController } from './controller/reserve.controller';
import { Reserve } from './reserve.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reserve])],
  providers: [ReserveService],
  controllers: [ReserveController],
})
export class ReserveModule {}
