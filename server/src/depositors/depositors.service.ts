import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDepositorDto } from './dto/create-depositor.dto';
import { UpdateDepositorDto } from './dto/update-depositor.dto';
import { Depositor, DepositorDocument } from './entities/depositor.entity';
import { Model } from 'mongoose';

@Injectable()
export class DepositorsService {

  constructor(@InjectModel(Depositor.name) private depoModel:Model<DepositorDocument>){}

  async create(createDepositorDto: CreateDepositorDto):Promise<Depositor> {
    const addnew =new this.depoModel(createDepositorDto);
    return await addnew.save();
    
  }

  async createMulti(createRetailerDto: CreateDepositorDto[]) {
    return this.depoModel.create(createRetailerDto)
  }

  async createMany(createDepositorDto: CreateDepositorDto):Promise<Depositor> {

    return this.depoModel.insertMany(createDepositorDto);

  }

  async findAll():Promise<Depositor[]> {
    return await this.depoModel.find().exec();
  }

  async findOne(id: string):Promise<Depositor> {
    return await this.depoModel.findById(id).exec();

  }

  async update(id: string, updateDepositorDto: UpdateDepositorDto):Promise<Depositor> {
    return this.depoModel.updateOne({_id:id},updateDepositorDto);
  }

  async remove(id: string):Promise<Depositor> {
    return this.depoModel.deleteOne({_id:id});

  }
}
