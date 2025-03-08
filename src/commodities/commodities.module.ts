import { Module } from '@nestjs/common';
import { CommoditiesController } from './commodities.controller';
import { CommoditiesService } from './commodities.service';

@Module({
  controllers: [CommoditiesController],
  providers: [CommoditiesService],
})
export class CommoditiesModule {}
