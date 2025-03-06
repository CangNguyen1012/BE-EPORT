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
import { CountriesService } from './countries.service';
import { CreateCountryDto, UpdateCountryDto } from './dtos/country.dto';
import {
  ApiTags,
  ApiQuery,
  ApiResponse,
  ApiOperation,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new country' })
  @ApiResponse({ status: 201, description: 'Country created successfully.' })
  @ApiBody({ type: CreateCountryDto })
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countriesService.create(createCountryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all countries with pagination' })
  @ApiQuery({
    name: 'skip',
    required: false,
    example: 0,
    description: 'Number of countries to skip',
  })
  @ApiQuery({
    name: 'take',
    required: false,
    example: 10,
    description: 'Number of countries to retrieve',
  })
  @ApiResponse({
    status: 200,
    description: 'Countries retrieved successfully.',
  })
  @ApiResponse({ status: 404, description: 'Countries not found.' })
  findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return this.countriesService.findAll(Number(skip), Number(take));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific country by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Country ID' })
  @ApiResponse({ status: 200, description: 'Country retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Country not found.' })
  findOne(@Param('id') id: string) {
    return this.countriesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update partial a specific country by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Country ID' })
  @ApiBody({ type: UpdateCountryDto })
  @ApiResponse({
    status: 200,
    description: 'Country updated successfully.',
  })
  @ApiResponse({ status: 404, description: 'Country not found.' })
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countriesService.updatePartial(id, updateCountryDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update full a specific country by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Country ID' })
  @ApiBody({ type: UpdateCountryDto })
  @ApiResponse({
    status: 200,
    description: 'Country updated successfully.',
  })
  @ApiResponse({ status: 404, description: 'Country not found.' })
  updateFull(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ) {
    return this.countriesService.updateFull(id, updateCountryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific country by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Country ID' })
  @ApiResponse({
    status: 200,
    description: 'Country deleted successfully.',
  })
  @ApiResponse({ status: 404, description: 'Country not found.' })
  remove(@Param('id') id: string) {
    return this.countriesService.remove(id);
  }
}
