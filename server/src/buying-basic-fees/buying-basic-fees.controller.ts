import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { BuyingBasicFeesService } from './buying-basic-fees.service';
import { CreateBuyingBasicFeeDto } from './dto/create-buying-basic-fee.dto';
import { UpdateBuyingBasicFeeDto } from './dto/update-buying-basic-fee.dto';

// @ApiBearerAuth()
@Controller('buying-basic-fees')
export class BuyingBasicFeesController {
  constructor(private readonly buyingBasicFeesService: BuyingBasicFeesService) {}

  @Post()
  create(@Body() createBuyingBasicFeeDto: CreateBuyingBasicFeeDto) {
    return this.buyingBasicFeesService.create(createBuyingBasicFeeDto);
  }

  // @Get()
  // findHistory() {
  //   return this.buyingBasicFeesService.findAll();
  // }

  @Get()
  findOne() {
    return this.buyingBasicFeesService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBuyingBasicFeeDto: UpdateBuyingBasicFeeDto) {
    return this.buyingBasicFeesService.update(id, updateBuyingBasicFeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buyingBasicFeesService.remove(id);
  }
}
