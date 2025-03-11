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
import { ImosService } from './imos.service';
import { CreateImoDto, UpdateImoDto } from './dtos/imo.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

@ApiTags('Imos')
@Controller('imos')
export class ImosController {
  constructor(private readonly imosService: ImosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a Imo' })
  @ApiResponse({ status: 201, description: 'Imo created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(@Body() createImoDto: CreateImoDto) {
    return await this.imosService.create(createImoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Imos' })
  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'take', required: false })
  @ApiResponse({ status: 200, description: 'List of Imos' })
  async findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return await this.imosService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Imo by id' })
  @ApiResponse({ status: 200, description: 'Imo found' })
  @ApiResponse({ status: 404, description: 'Imo not found' })
  async findOne(@Param('id') id: string) {
    return await this.imosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a Imo partially' })
  @ApiResponse({ status: 200, description: 'Imo updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async updatePartial(
    @Param('id') id: string,
    @Body() updateImoDto: UpdateImoDto,
  ) {
    return await this.imosService.updatePartial(id, updateImoDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Imo fully' })
  @ApiResponse({ status: 200, description: 'Imo updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async updateFull(
    @Param('id') id: string,
    @Body() updateImoDto: UpdateImoDto,
  ) {
    return await this.imosService.updateFull(id, updateImoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Imo' })
  @ApiResponse({ status: 200, description: 'Imo deleted successfully' })
  @ApiResponse({ status: 404, description: 'Imo not found' })
  async remove(@Param('id') id: string) {
    return await this.imosService.remove(id);
  }
}
