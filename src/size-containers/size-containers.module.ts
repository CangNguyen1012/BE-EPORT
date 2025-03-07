import { Module } from '@nestjs/common';
import { SizeContainersService } from './size-containers.service';
import { SizeContainersController } from './size-containers.controller';

@Module({
  providers: [SizeContainersService],
  controllers: [SizeContainersController],
})
export class SizeContainersModule {}
