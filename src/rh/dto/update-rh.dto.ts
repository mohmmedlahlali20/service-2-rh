import { PartialType } from '@nestjs/mapped-types';
import { CreateRhDto } from './create-rh.dto';

export class UpdateRhDto extends PartialType(CreateRhDto) {}
