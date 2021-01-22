import { PartialType } from '@nestjs/mapped-types';
import { CreateBuyingBasicFeeDto } from './create-buying-basic-fee.dto';

export class UpdateBuyingBasicFeeDto extends PartialType(CreateBuyingBasicFeeDto) {
    buying_fee:number;
    create_date:Date;
    update_date:Date;
}
