
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type DeliveryAreaDocument = DeliveryArea & Document;

@Schema()
export class DeliveryArea {

    @Prop()
    area_ko: string;

    @Prop()
    area_eng: string;

}

export const DeliveryAreaSchema = SchemaFactory.createForClass(DeliveryArea);

