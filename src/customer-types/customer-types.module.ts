import { Module } from '@nestjs/common';
import { CustomerTypesService } from './customer-types.service';
import { CustomerTypesController } from './customer-types.controller';

@Module({
  providers: [CustomerTypesService],
  controllers: [CustomerTypesController],
})
export class CustomerTypesModule {}
