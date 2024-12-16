import { Injectable } from '@nestjs/common';
import { CreateRhDto } from './dto/create-rh.dto';
import { UpdateRhDto } from './dto/update-rh.dto';

@Injectable()
export class RhService {
  create(createRhDto: CreateRhDto) {
    return 'This action adds a new rh';
  }

  findAll() {
    return `This action returns all rh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rh`;
  }

  update(id: number, updateRhDto: UpdateRhDto) {
    return `This action updates a #${id} rh`;
  }

  remove(id: number) {
    return `This action removes a #${id} rh`;
  }
}
