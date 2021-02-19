import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { BuyingAreasService } from './buying-areas.service';
import { CreateBuyingAreaDto } from './dto/create-buying-area.dto';
import { UpdateBuyingAreaDto } from './dto/update-buying-area.dto';

// @ApiBearerAuth()
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
