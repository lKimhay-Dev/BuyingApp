import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRetailerDto } from './dto/create-retailer.dto';
import { UpdateRetailerDto } from './dto/update-retailer.dto';
import { Model } from 'mongoose';
import { RetailerDocument, Retailer } from './entities/retailer.entity';

@Injectable()
export class RetailersService {

  constructor(@InjectModel('Retailer') private readonly retailModel: Model<RetailerDocument>) { }

  async create(createRetailerDto: CreateRetailerDto): Promise<Retailer> {
    const addNew = new this.retailModel(createRetailerDto);
    return await addNew.save();
  }

  async findAll(): Promise<Retailer[]> {
    return await this.retailModel.find()
      .where('is_active')
      .equals(true)
      .populate(['depositors', 'user']).exec();
  }

  async findOne(id: string): Promise<Retailer> {
    return await this.retailModel.findById(id).populate(['depositors', 'user']).exec();
  }
  async update(id: string, updateRetailerDto: UpdateRetailerDto) {
    return this.retailModel.updateOne({ _id: id }, { $set: updateRetailerDto });
  }
  async deActivate(id: string) {
    return this.retailModel.updateOne({ _id: id }, { is_active: false });
  }
  async remove(id: string): Promise<Retailer> {
    return this.retailModel.deleteOne({ _id: id });
  }
}
