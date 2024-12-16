import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RhService } from './rh.service';
import { CreateRhDto } from './dto/create-rh.dto';
import { UpdateRhDto } from './dto/update-rh.dto';

@Controller('rh')
export class RhController {
  constructor(private readonly rhService: RhService) {}

  @Post()
  create(@Body() createRhDto: CreateRhDto) {
    return this.rhService.create(createRhDto);
  }

  @Get()
  findAll() {
    return this.rhService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rhService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRhDto: UpdateRhDto) {
    return this.rhService.update(+id, updateRhDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rhService.remove(+id);
  }
}
