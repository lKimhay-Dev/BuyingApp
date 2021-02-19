import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';


@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const addnew = new this.userModel(createUserDto);
    return await addnew.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel
      // .find()
      .find().where('is_active').equals(true)
      .populate(['buying_area_id', 'delivery_area_id'])
      .exec();
  }

  async findOne(email: string): Promise<User> {
    return await this.userModel.
      findOne({ email: email })
      .populate(['buying_area_id', 'delivery_area_id'])
      .exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ _id: id }, updateUserDto, { new: true });
  }

  async deActive(id: string) {
    return this.userModel.updateOne({ _id: id }, { is_active: false });
  }

  async remove(id: string): Promise<User> {
    return this.userModel.deleteOne({ _id: id });
  }
}
