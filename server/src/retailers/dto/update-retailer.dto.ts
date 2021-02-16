import { PartialType } from '@nestjs/mapped-types';
import { CreateRetailerDto } from './create-retailer.dto';
import { Depositor } from '../../depositors/entities/depositor.entity';
import { User } from '../../users/entities/user.entity';

export class UpdateRetailerDto extends PartialType(CreateRetailerDto) {
    retailer_name: string;
    phone_number: string;
    address_ko: string;
    address_eng: string;
    buying_fee: number;
    depositors: Depositor[]; 
    user: User;
    update_date: Date;
}
