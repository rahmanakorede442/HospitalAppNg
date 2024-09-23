import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// config
import { database_string } from './config/database.config';

// remove later
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitalModule } from './app/modules/hospital.module';

@Module({
  imports: [MongooseModule.forRoot(database_string), HospitalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
