import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessionalModule } from './professional/professional.module';
import { ProfessionModule } from './profession/profession.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    PatientModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'situDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProfessionalModule,
    ProfessionModule,
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
