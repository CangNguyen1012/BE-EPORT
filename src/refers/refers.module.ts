import { Module } from '@nestjs/common';
import { RefersService } from './refers.service';
import { RefersController } from './refers.controller';

@Module({
  providers: [RefersService],
  controllers: [RefersController],
})
export class RefersModule {}
