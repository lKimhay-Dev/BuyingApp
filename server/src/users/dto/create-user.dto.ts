import { BuyingArea } from '../../buying-areas/entities/buying-area.entity';
import { DeliveryArea } from '../../delivery-areas/entities/delivery-area.entity';
export class CreateUserDto {
    username: string;
    email: string;
    buying_area_id: BuyingArea;
    delivery_area_id: DeliveryArea;
    is_active: boolean;
}
