import { PartialType } from '@nestjs/mapped-types';
import { CreateBuyingAreaDto } from './create-buying-area.dto';

export class UpdateBuyingAreaDto extends PartialType(CreateBuyingAreaDto) {
    area_ko:string;
    area_eng:string;
}
