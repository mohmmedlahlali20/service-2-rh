import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RhModule } from './rh/rh.module';

@Module({
  imports: [RhModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
