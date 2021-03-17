import { DepositorDto } from 'src/app/dtos/depositor.dto';
import { UserDto } from 'src/app/dtos/user.dto';

export class RetailerDto {
    retailer_name: string;
    phone_number: string;
    address_ko: string;
    address_eng: string;
    address_zone_no: string;
    buying_fee: number;
    depositors: DepositorDto[];
    user: UserDto;
    is_active: boolean;
}
