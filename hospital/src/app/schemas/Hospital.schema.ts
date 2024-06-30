import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { generate_hospital_number } from '../utils/random_number';

export type HospitalDocument = Hospital & Document;

@Schema()
export class Hospital {
  @Prop({ required: true, unique: true })
  hospital_number: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description?: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: false })
  longitude?: string;

  @Prop({ required: false })
  latitude?: string;
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);

HospitalSchema.pre<HospitalDocument>('validate', function (next) {
  if (!this.hospital_number) this.hospital_number = generate_hospital_number();
  next();
});
