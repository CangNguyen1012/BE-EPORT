import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Patch,
  Delete,
} from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { CreateLanguageDto, UpdateLanguageDto } from './dtos/language.dto';
import { ApiTags, ApiQuery, ApiResponse } from '@nestjs/swagger';

@ApiTags('Languages')
@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Language created successfully.' })
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languagesService.create(createLanguageDto);
  }

  @Get()
  @ApiQuery({ name: 'skip', required: false, example: 0 })
  @ApiQuery({ name: 'take', required: false, example: 10 })
  findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return this.languagesService.findAll(Number(skip), Number(take));
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Language retrieved successfully.' })
  findOne(@Param('id') id: string) {
    return this.languagesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLanguageDto: UpdateLanguageDto,
  ) {
    return this.languagesService.update(id, updateLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languagesService.remove(id);
  }
}
