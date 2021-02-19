import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { DeliveryAreasService } from './delivery-areas.service';
import { CreateDeliveryAreaDto } from './dto/create-delivery-area.dto';
import { UpdateDeliveryAreaDto } from './dto/update-delivery-area.dto';

// @ApiBearerAuth()
@Controller('delivery-areas')
export class DeliveryAreasController {
  constructor(private readonly deliveryAreasService: DeliveryAreasService) {}

  @Post()
  create(@Body() createDeliveryAreaDto: CreateDeliveryAreaDto) {
    return this.deliveryAreasService.create(createDeliveryAreaDto);
  }

  @Get()
  findAll() {
    return this.deliveryAreasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryAreasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDeliveryAreaDto: UpdateDeliveryAreaDto) {
    return this.deliveryAreasService.update(id, updateDeliveryAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryAreasService.remove(id);
  }
}
