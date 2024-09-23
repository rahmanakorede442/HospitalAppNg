import {
  Body,
  Controller,
  Get,
  Param,
  Post,
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

  @Get(':id')
  async show(@Param('id') id: string) {
    //const is_valid = mongoose.Types.ObjectId.isValid(id); // better used in middleware
    // HttpException('User not found', 404)
    console.log(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() request: HospitalDto) {
    console.log(request);
    // this.service.create(request);
  }
}
