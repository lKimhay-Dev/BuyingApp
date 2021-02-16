import { User } from '../../users/entities/user.entity';
import { Depositor } from '../../depositors/entities/depositor.entity';
export class CreateRetailerDto {
    retailer_name: string;
    phone_number: string;
    address_ko: string;
    address_eng: string;
    buying_fee: number;
    depositors: Depositor[]; 
    user: User;
    create_date: Date;
}
