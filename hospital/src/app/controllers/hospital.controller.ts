import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
  // HttpException,
} from '@nestjs/common';
import { HospitalService } from '../services/hospital.service';
import { HospitalDto } from '../dtos/hospital.dto';
// import mongoose from 'mongoose';

@Controller('hospital')
export class HospitalController {
  constructor(private service: HospitalService) {}

  @Get('')
  async index(@Query() request: any) {
    const { limit, page } = request;
    if (Number(limit) || Number(page))
      return await this.service.index(Number(limit), Number(page));
    return [];
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    //const is_valid = mongoose.Types.ObjectId.isValid(id); // better used in middleware
    // HttpException('User not found', 404)
    console.log(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() request: HospitalDto) {
    return this.service.create(request);
  }
}
