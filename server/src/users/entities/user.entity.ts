import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { DeliveryArea } from '../../delivery-areas/entities/delivery-area.entity';
import { BuyingArea } from '../../buying-areas/entities/buying-area.entity';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;
@Schema()
export class User {
    
    @Prop({ required: true })
    guid: string;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    email: string;

    @Prop()
    guimg: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'BuyingArea' })
    buying_area_id: BuyingArea;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'DeliveryArea' })
    delivery_area_id: DeliveryArea;

    @Prop({ type: Boolean, default: true })
    is_active: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);
