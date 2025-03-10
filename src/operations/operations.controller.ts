import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { OperationsService } from './operations.service';
import { CreateOperationDto, UpdateOperationDto } from './dtos/operation.dto';

@Controller('operations')
@ApiTags('Operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create operation' })
  @ApiResponse({ status: 201, description: 'Operation created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 409, description: 'Operation already exists' })
  @ApiBody({ type: CreateOperationDto })
  async create(@Body() data: CreateOperationDto) {
    try {
      return await this.operationsService.create(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all operations' })
  @ApiResponse({ status: 200, description: 'Operations found' })
  @ApiResponse({ status: 404, description: 'Operations not found' })
  async findAll() {
    try {
      return await this.operationsService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get operation by id' })
  @ApiResponse({ status: 200, description: 'Operation found' })
  @ApiResponse({ status: 404, description: 'Operation not found' })
  @ApiParam({ name: 'id', type: String })
  async findOne(@Param('id') id: string) {
    try {
      return await this.operationsService.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update operation partially' })
  @ApiResponse({ status: 200, description: 'Operation updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Operation not found' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateOperationDto })
  async updatePartial(
    @Param('id') id: string,
    @Body() data: UpdateOperationDto,
  ) {
    try {
      return await this.operationsService.updatePartial(id, data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update operation fully' })
  @ApiResponse({ status: 200, description: 'Operation updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Operation not found' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateOperationDto })
  async updateFull(@Param('id') id: string, @Body() data: UpdateOperationDto) {
    try {
      return await this.operationsService.updateFull(id, data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete operation' })
  @ApiResponse({ status: 200, description: 'Operation deleted' })
  @ApiResponse({ status: 404, description: 'Operation not found' })
  @ApiParam({ name: 'id', type: String })
  async remove(@Param('id') id: string) {
    try {
      return await this.operationsService.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
