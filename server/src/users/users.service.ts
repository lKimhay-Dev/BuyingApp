import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
// import { User, UserDocument } from './entities/user.entity';

export type Userss = any;

@Injectable()
export class UsersService {

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<Userss | undefined> {
    return this.users.find(user => user.username === username);
  }

  // constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) { }

  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const addnew = new this.userModel(createUserDto);
  //   return await addnew.save();
  // }

  // async findAll(): Promise<User[]> {
  //   return await this.userModel
  //     // .find()
  //     .find().where('is_active').equals(true)
  //     .populate(['buying_area_id', 'delivery_area_id'])
  //     .exec();
  // }

  // async findOne(id: string): Promise<User> {
  //   return await this.userModel.
  //     findById(id)
  //     .populate(['buying_area_id', 'delivery_area_id'])
  //     .exec();
  // }

  // async update(id: string, updateUserDto: UpdateUserDto) {
  //   return this.userModel.updateOne({ _id: id }, updateUserDto, { new: true });
  // }

  // async deActive(id: string) {
  //   return this.userModel.updateOne({ _id: id }, { is_active: false });
  // }

  // async remove(id: string): Promise<User> {
  //   return this.userModel.deleteOne({ _id: id });
  // }
}
