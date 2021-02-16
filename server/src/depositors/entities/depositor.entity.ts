import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type DepositorDocument = Depositor & Document;
@Schema()
export class Depositor {

    @Prop()
    name: string;
    
}

export const DepositorSchema = SchemaFactory.createForClass(Depositor);

