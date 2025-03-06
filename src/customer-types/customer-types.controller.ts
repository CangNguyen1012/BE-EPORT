import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CustomerTypesService } from './customer-types.service';
import {
  CreateCustomerTypeDto,
  UpdateCustomerTypeDto,
} from './dtos/customer-type.dto';

@ApiTags('Customer-types')
@Controller('customer-types')
export class CustomerTypesController {
  constructor(private readonly customerTypesService: CustomerTypesService) {}

  @Post()
  @ApiOperation({ summary: 'Create customer-type' })
  @ApiBody({ type: CreateCustomerTypeDto })
  @ApiResponse({ status: 201, description: 'Customer-type created' })
  create(@Body() data: CreateCustomerTypeDto) {
    return this.customerTypesService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all customer-types' })
  @ApiQuery({
    name: 'skip',
    required: false,
    example: 0,
    description: 'Number of customerTypes to skip',
  })
  @ApiQuery({
    name: 'take',
    required: false,
    example: 10,
    description: 'Number of customerTypes to retrieve',
  })
  @ApiResponse({ status: 200, description: 'Customer-types found' })
  findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return this.customerTypesService.findAll(Number(skip), Number(take));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get customer-type by id' })
  @ApiParam({ name: 'id', description: 'Customer-type id' })
  @ApiResponse({ status: 200, description: 'Customer-type found' })
  @ApiResponse({ status: 404, description: 'Customer-type not found' })
  findOne(@Param('id') id: string) {
    return this.customerTypesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update customer-type by id' })
  @ApiParam({ name: 'id', description: 'Customer-type id' })
  @ApiBody({ type: UpdateCustomerTypeDto })
  @ApiResponse({ status: 200, description: 'Customer-type updated' })
  @ApiResponse({ status: 404, description: 'Customer-type not found' })
  updatePartial(@Param('id') id: string, @Body() data: CreateCustomerTypeDto) {
    return this.customerTypesService.updatePartial(id, data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update customer-type by id' })
  @ApiParam({ name: 'id', description: 'Customer-type id' })
  @ApiBody({ type: UpdateCustomerTypeDto })
  @ApiResponse({ status: 200, description: 'Customer-type updated' })
  @ApiResponse({ status: 404, description: 'Customer-type not found' })
  updateFull(@Param('id') id: string, @Body() data: CreateCustomerTypeDto) {
    return this.customerTypesService.updateFull(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete customer-type by id' })
  @ApiParam({ name: 'id', description: 'Customer-type id' })
  @ApiResponse({ status: 200, description: 'Customer-type deleted' })
  @ApiResponse({ status: 404, description: 'Customer-type not found' })
  remove(@Param('id') id: string) {
    return this.customerTypesService.remove(id);
  }
}
