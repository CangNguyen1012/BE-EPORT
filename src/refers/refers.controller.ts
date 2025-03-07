/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Param,
  Patch,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CreateReferDto, UpdateReferDto } from './dtos/refer.dto';
import { RefersService } from './refers.service';

@Controller('refers')
@ApiTags('refers')
export class RefersController {
  constructor(private readonly refersService: RefersService) {}

  @Post()
  @ApiOperation({ summary: 'Create refer' })
  @ApiResponse({ status: 201, description: 'Refer created successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async create(@Body() createReferDto: CreateReferDto) {
    return this.refersService.create(createReferDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all refers' })
  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'take', required: false })
  @ApiResponse({ status: 200, description: 'Refers retrieved successfully' })
  async findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return this.refersService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get refer by ID' })
  @ApiResponse({ status: 200, description: 'Refer retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Refer not found' })
  async findOne(@Param('id') id: string) {
    return this.refersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update refer partially' })
  @ApiResponse({ status: 200, description: 'Refer updated successfully' })
  @ApiResponse({ status: 404, description: 'Refer not found' })
  async updatePartial(
    @Param('id') id: string,
    @Body() updateReferDto: UpdateReferDto,
  ) {
    return this.refersService.updatePartial(id, updateReferDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update refer fully' })
  @ApiResponse({ status: 200, description: 'Refer updated successfully' })
  @ApiResponse({ status: 404, description: 'Refer not found' })
  async updateFull(
    @Param('id') id: string,
    @Body() updateReferDto: UpdateReferDto,
  ) {
    return this.refersService.updateFull(id, updateReferDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete refer' })
  @ApiResponse({ status: 204, description: 'Refer deleted successfully' })
  @ApiResponse({ status: 404, description: 'Refer not found' })
  async remove(@Param('id') id: string) {
    return this.refersService.remove(id);
  }
}
