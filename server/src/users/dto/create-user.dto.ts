import { BuyingArea } from '../../buying-areas/entities/buying-area.entity';
import { DeliveryArea } from '../../delivery-areas/entities/delivery-area.entity';
export class CreateUserDto {
    guid: string;
    username: string;
    email: string;
    guimg: string;
    buying_area_id: BuyingArea;
    delivery_area_id: DeliveryArea;
    is_active: boolean;
}
