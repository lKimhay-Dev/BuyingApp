import { PartialType } from '@nestjs/mapped-types';
import { BuyingArea } from 'src/buying-areas/entities/buying-area.entity';
import { DeliveryArea } from 'src/delivery-areas/entities/delivery-area.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    email: string;
    buying_area_id: BuyingArea;
    delivery_area_id: DeliveryArea;
}
