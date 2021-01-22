import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryAreaDto } from './create-delivery-area.dto';

export class UpdateDeliveryAreaDto extends PartialType(CreateDeliveryAreaDto) {
    area_ko:string;
    area_eng:string;
}
