import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
