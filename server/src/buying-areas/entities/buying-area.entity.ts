
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type BuyingAreaDocument = BuyingArea & Document;

@Schema()
export class BuyingArea {

    @Prop()
    area_ko: string;

    @Prop()
    area_eng: string;

}

export const BuyingAreaSchema = SchemaFactory.createForClass(BuyingArea);

