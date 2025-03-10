import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';

@Module({
  providers: [OperationsService],
  controllers: [OperationsController],
})
export class OperationsModule {}
