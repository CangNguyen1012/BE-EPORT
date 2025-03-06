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
import { LanguagesService } from './languages.service';
import { CreateLanguageDto, UpdateLanguageDto } from './dtos/language.dto';
import {
  ApiTags,
  ApiQuery,
  ApiResponse,
  ApiOperation,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Languages')
@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new language' })
  @ApiResponse({ status: 201, description: 'Language created successfully.' })
  @ApiBody({ type: CreateLanguageDto })
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languagesService.create(createLanguageDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all languages with pagination' })
  @ApiQuery({
    name: 'skip',
    required: false,
    example: 0,
    description: 'Number of languages to skip',
  })
  @ApiQuery({
    name: 'take',
    required: false,
    example: 10,
    description: 'Number of languages to retrieve',
  })
  @ApiResponse({
    status: 200,
    description: 'Languages retrieved successfully.',
  })
  findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return this.languagesService.findAll(Number(skip), Number(take));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific language by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Language ID' })
  @ApiResponse({ status: 200, description: 'Language retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Language not found.' })
  findOne(@Param('id') id: string) {
    return this.languagesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update partial for a specific language by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Language ID' })
  @ApiBody({ type: UpdateLanguageDto })
  @ApiResponse({ status: 200, description: 'Language updated successfully.' })
  @ApiResponse({ status: 404, description: 'Language not found.' })
  updatePartial(
    @Param('id') id: string,
    @Body() updateLanguageDto: UpdateLanguageDto,
  ) {
    return this.languagesService.updatePartial(id, updateLanguageDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update full for a specific language by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Language ID' })
  @ApiBody({ type: UpdateLanguageDto })
  @ApiResponse({ status: 200, description: 'Language updated successfully.' })
  @ApiResponse({ status: 404, description: 'Language not found.' })
  updateFull(
    @Param('id') id: string,
    @Body() updateLanguageDto: UpdateLanguageDto,
  ) {
    return this.languagesService.updateFull(id, updateLanguageDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a language by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Language ID' })
  @ApiResponse({ status: 200, description: 'Language deleted successfully.' })
  remove(@Param('id') id: string) {
    return this.languagesService.remove(id);
  }
}
