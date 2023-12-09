import { Module } from '@nestjs/common';
import { ProfessionalService } from './service/professional.service';
import { ProfessionalController } from './controller/professional.controller';
import { Professional } from './professional.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Professional])],
  providers: [ProfessionalService],
  controllers: [ProfessionalController],
})
export class ProfessionalModule {}
