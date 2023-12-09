import { Module } from '@nestjs/common';
import { ProfessionService } from './service/profession.service';
import { ProfessionController } from './controller/profession.controller';
import { Profession } from './profession.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professional } from 'src/professional/professional.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profession, Professional])],
  providers: [ProfessionService],
  controllers: [ProfessionController],
})
export class ProfessionModule {}
