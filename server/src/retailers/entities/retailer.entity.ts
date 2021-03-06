import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/entities/user.entity';
import { Depositor } from '../../depositors/entities/depositor.entity';

export type RetailerDocument = Retailer & Document;

@Schema()
export class Retailer {
  @Prop({ required: true })
  retailer_name: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop()
  address_ko: string;

  @Prop()
  address_eng: string;

  @Prop({ required: true })
  buying_fee: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Depositor' }] })
  depositors: Depositor[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: Date })
  create_date: Date;

  @Prop({ type: Date })
  update_date: Date;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;
}

export const RetailerSchema = SchemaFactory.createForClass(Retailer);
