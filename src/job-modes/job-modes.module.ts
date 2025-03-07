import { Module } from '@nestjs/common';
import { JobModesService } from './job-modes.service';
import { JobModesController } from './job-modes.controller';

@Module({
  providers: [JobModesService],
  controllers: [JobModesController],
})
export class JobModesModule {}
