import { IsNotEmpty, IsString } from 'class-validator';

export class HospitalDto {
  @IsString()
  @IsNotEmpty()
  hospital_number: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
