import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDeliveryAreaDto } from './dto/create-delivery-area.dto';
import { UpdateDeliveryAreaDto } from './dto/update-delivery-area.dto';
import { Model } from 'mongoose';
import { DeliveryArea, DeliveryAreaDocument } from './entities/delivery-area.entity';
import { doc } from 'prettier';

@Injectable()
export class DeliveryAreasService {

  constructor(@InjectModel('DeliveryArea') private readonly deliveryModel:Model<DeliveryAreaDocument>){}
  async create(createDeliveryAreaDto: CreateDeliveryAreaDto):Promise<DeliveryArea> {
    const addNew= new this.deliveryModel(createDeliveryAreaDto);
    return await addNew.save();
  }

  async findAll():Promise<DeliveryArea[]> {
    return await this.deliveryModel.find().exec();
  }

  async findOne(id: string):Promise<DeliveryArea> {
    return this.deliveryModel.findById(id).exec();

  }

  async update(id: string, updateDeliveryAreaDto: UpdateDeliveryAreaDto) {
    return this.deliveryModel.updateOne({_id:id} ,updateDeliveryAreaDto, {new:true});
  }

  async remove(id: string):Promise<DeliveryArea> {
    return this.deliveryModel.deleteOne({_id:id});
  }
}
