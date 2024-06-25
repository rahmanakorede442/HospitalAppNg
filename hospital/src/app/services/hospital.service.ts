import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hospital } from '../schemas/Hospital.schema';
import { Model } from 'mongoose';
import { HospitalDto } from '../dtos/hospital.dto';

@Injectable()
export class HospitalService {
  constructor(@InjectModel(Hospital.name) private model: Model<Hospital>) {}

  // createHospitalDto -> [Dto -> Data transfer object]
  create(request: HospitalDto) {
    return this.model.create(request);
  }
}
