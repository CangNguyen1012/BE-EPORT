import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Patch,
  Delete,
  Put,
} from '@nestjs/common';
import {
  ApiTags,
  ApiQuery,
  ApiResponse,
  ApiOperation,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { CommoditiesService } from './commodities.service';
import { CreateCommodityDto, UpdateCommodityDto } from './dtos/commodity.dto';

@ApiTags('commodities')
@Controller('commodities')
export class CommoditiesController {
  constructor(private readonly commoditiesService: CommoditiesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiOperation({ summary: 'Create commodity' })
  @ApiBody({ type: CreateCommodityDto })
  async create(@Body() createCommodityDto: CreateCommodityDto) {
    return this.commoditiesService.create(createCommodityDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiOperation({ summary: 'Get all commodities' })
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  async findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return this.commoditiesService.findAll(skip, take);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiOperation({ summary: 'Get commodity by id' })
  @ApiParam({ name: 'id', required: true, type: String })
  async findOne(@Param('id') id: string) {
    return this.commoditiesService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiOperation({ summary: 'Update commodity by id' })
  @ApiParam({ name: 'id', required: true, type: String })
  @ApiBody({ type: UpdateCommodityDto })
  async updatePartial(
    @Param('id') id: string,
    @Body() updateCommodityDto: UpdateCommodityDto,
  ) {
    return this.commoditiesService.updatePartial(id, updateCommodityDto);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiOperation({ summary: 'Update commodity by id' })
  @ApiParam({ name: 'id', required: true, type: String })
  @ApiBody({ type: UpdateCommodityDto })
  async updateFull(
    @Param('id') id: string,
    @Body() updateCommodityDto: UpdateCommodityDto,
  ) {
    return this.commoditiesService.updateFull(id, updateCommodityDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'No Content' })
  @ApiOperation({ summary: 'Delete commodity by id' })
  @ApiParam({ name: 'id', required: true, type: String })
  async remove(@Param('id') id: string) {
    return this.commoditiesService.remove(id);
  }
}
