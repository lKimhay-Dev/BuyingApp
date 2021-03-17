import { DeliveryAreaDto } from 'src/app/dtos/delivery-area.dto';
import { BuyingAreaDto } from 'src/app/dtos/buying-area.dto';
export class UserDto {
    guid: string;
    username: string;
    email: string;
    guimg: string;
    buying_area_id: BuyingAreaDto;
    delivery_area_id: DeliveryAreaDto;
    is_active: boolean;
}
