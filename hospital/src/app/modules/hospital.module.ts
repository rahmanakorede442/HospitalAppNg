import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Hospital, HospitalSchema } from '../schemas/Hospital.schema';
import { HospitalService } from '../services/hospital.service';
import { HospitalController } from '../controllers/hospital.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Hospital.name,
        schema: HospitalSchema,
      },
    ]),
  ],
  providers: [HospitalService],
  controllers: [HospitalController],
})
export class HospitalModule {}
