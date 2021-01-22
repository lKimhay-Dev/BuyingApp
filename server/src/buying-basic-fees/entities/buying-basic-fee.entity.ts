import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type BuyingBasicFeeDocument = BuyingBasicFee & Document;

@Schema()
export class BuyingBasicFee {

    @Prop({ required: true })
    buying_fee: number;
  
    @Prop({ type:Date})
    create_date: Date;

    @Prop({ type:Date })
    update_date: Date;

}

export const BuyingBasicFeeSchema = SchemaFactory.createForClass(BuyingBasicFee);
