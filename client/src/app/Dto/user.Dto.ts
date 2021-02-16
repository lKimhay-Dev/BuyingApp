import { BuyingAreaDto } from './buyingArea.Dto';
import { DeliveryAreaDto } from './deliveryArea.Dto';
export class UserDto {
    username: string;
    email: string;
    buying_area_id: BuyingAreaDto;
    delivery_area_id: DeliveryAreaDto;
    is_active: boolean;
}