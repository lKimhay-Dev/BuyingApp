import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BuyingAreasService } from './buying-areas.service';
import { CreateBuyingAreaDto } from './dto/create-buying-area.dto';
import { UpdateBuyingAreaDto } from './dto/update-buying-area.dto';

@Controller('buying-areas')
export class BuyingAreasController {
  constructor(private readonly buyingAreasService: BuyingAreasService) {}

  @Post()
  create(@Body() createBuyingAreaDto: CreateBuyingAreaDto) {
    return this.buyingAreasService.create(createBuyingAreaDto);
  }

  @Get()
  findAll() {
    return this.buyingAreasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buyingAreasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBuyingAreaDto: UpdateBuyingAreaDto) {
    return this.buyingAreasService.update(id, updateBuyingAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buyingAreasService.remove(id);
  }
}
