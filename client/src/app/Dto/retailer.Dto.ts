import { DepositorDto } from './depositor.Dto';
import { UserDto } from './user.Dto';
export class RetailerDto {
    retailer_name: string;
    phone_number: string;
    address_ko: string;
    address_eng: string;
    buying_fee: number;
    depositors: DepositorDto[]; 
    user: UserDto;
    is_active: boolean;
}