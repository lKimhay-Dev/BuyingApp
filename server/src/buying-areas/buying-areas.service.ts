import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBuyingAreaDto } from './dto/create-buying-area.dto';
import { UpdateBuyingAreaDto } from './dto/update-buying-area.dto';
import { Model } from 'mongoose';
import { BuyingAreaDocument, BuyingArea } from './entities/buying-area.entity';

@Injectable()
export class BuyingAreasService {

  constructor(@InjectModel('BuyingArea') private readonly buyingModel:Model<BuyingAreaDocument>){}

  async create(createBuyingAreaDto: CreateBuyingAreaDto):Promise<BuyingArea> {
    const addNew =new this.buyingModel(createBuyingAreaDto);
    return await addNew.save();
  }

  async findAll():Promise<BuyingArea[]> {
    return await this.buyingModel.find().exec();
  }

  async findOne(id: string):Promise<BuyingArea> {
    return this.buyingModel.findById(id).exec();

  }

  async update(id: string, updateBuyingAreaDto: UpdateBuyingAreaDto) {
    return this.buyingModel.updateOne({_id:id} ,updateBuyingAreaDto, {new:true});
  }

  async remove(id: string):Promise<BuyingArea> {
    return this.buyingModel.deleteOne({_id:id});
  }
}
