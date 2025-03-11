import { Module } from '@nestjs/common';
import { ImosService } from './imos.service';
import { ImosController } from './imos.controller';

@Module({
  providers: [ImosService],
  controllers: [ImosController],
})
export class ImosModule {}
