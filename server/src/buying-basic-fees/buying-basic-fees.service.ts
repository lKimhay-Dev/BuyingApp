import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBuyingBasicFeeDto } from './dto/create-buying-basic-fee.dto';
import { UpdateBuyingBasicFeeDto } from './dto/update-buying-basic-fee.dto';
import { Model } from 'mongoose';
import { BuyingBasicFeeDocument, BuyingBasicFee } from './entities/buying-basic-fee.entity';

@Injectable()
export class BuyingBasicFeesService {

  constructor(@InjectModel('BuyingBasicFee') private buyingModel:Model<BuyingBasicFeeDocument>){}

  async create(createBuyingBasicFeeDto: CreateBuyingBasicFeeDto) {
    const addNew= new this.buyingModel(createBuyingBasicFeeDto);
    return await addNew.save();
  }

  async findAll():Promise<BuyingBasicFee[]> {
    return await this.buyingModel.find().exec();
  }

  async findOne():Promise<BuyingBasicFee> {
    return await this.buyingModel.findOne().sort({'update_date': 'desc'}).exec();;
  }

  async update(id: string, updateBuyingBasicFeeDto: UpdateBuyingBasicFeeDto){
    return this.buyingModel.updateOne({_id:id} ,updateBuyingBasicFeeDto, {new:true});
  }

  async remove(id: string):Promise<BuyingBasicFee> {
    return this.buyingModel.deleteOne({_id: id})
  }
}
