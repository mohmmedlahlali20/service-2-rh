import { Module } from '@nestjs/common';
import { RhService } from './rh.service';
import { RhController } from './rh.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RH, RHSchema } from './schema/RH.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RH.name, schema: RHSchema }])
  ],
  controllers: [RhController],
  providers: [RhService],
})
export class RhModule {}
