import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hospital } from '../schemas/Hospital.schema';
import { Model } from 'mongoose';
import { HospitalDto } from '../dtos/hospital.dto';
import { paginate, total_page } from '../utils/paginate';

@Injectable()
export class HospitalService {
  constructor(@InjectModel(Hospital.name) private model: Model<Hospital>) {}

  async index(limit: number, page: number) {
    const total_docs = await this.total_doc();

    const { skip, per_page } = paginate(limit, page);
    const total = total_page(total_docs, limit);

    // test if paginate is 0 and handle it...
    const data = await this.model.find().skip(skip).limit(per_page);
    return {
      data,
      total,
      current_page: page,
    };
  }

  // createHospitalDto -> [Dto -> Data transfer object]
  create(request: HospitalDto) {
    console.log('request');
    return this.model.create(request);
  }

  private async total_doc() {
    return await this.model.countDocuments({});
  }
}
