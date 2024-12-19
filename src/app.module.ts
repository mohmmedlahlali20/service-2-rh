import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RhModule } from './rh/rh.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.Mongo_URI || 'mongodb://localhost:27017/RH'),
    RhModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
