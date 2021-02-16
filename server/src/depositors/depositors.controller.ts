import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { DepositorsService } from './depositors.service';
import { CreateDepositorDto } from './dto/create-depositor.dto';
import { UpdateDepositorDto } from './dto/update-depositor.dto';

@Controller('depositors')
export class DepositorsController {
  constructor(private readonly depositorsService: DepositorsService) {}

  @Post()
  create(@Body() createDepositorDto: CreateDepositorDto[]) {
    return this.depositorsService.createMulti(createDepositorDto);
  }

  @Get()
  findAll() {
    return this.depositorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depositorsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDepositorDto: UpdateDepositorDto) {
    return this.depositorsService.update(id, updateDepositorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depositorsService.remove(id);
  }
}
