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
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateSizeContainerDto,
  UpdateSizeContainerDto,
} from './dtos/size-containers.dto';
import { SizeContainersService } from './size-containers.service';

@Controller('size-containers')
@ApiTags('size-containers')
export class SizeContainersController {
  constructor(private readonly sizeContainersService: SizeContainersService) {}

  @Post()
  @ApiOperation({ summary: 'Create size container' })
  @ApiResponse({ status: 201, description: 'Size container created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(@Body() createSizeContainerDto: CreateSizeContainerDto) {
    return await this.sizeContainersService.create(createSizeContainerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all size containers' })
  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'take', required: false })
  @ApiResponse({ status: 200, description: 'Size containers retrieved' })
  async findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return this.sizeContainersService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get size container by id' })
  @ApiResponse({ status: 200, description: 'Size container retrieved' })
  @ApiResponse({ status: 404, description: 'Size container not found' })
  async findOne(@Param('id') id: string) {
    return this.sizeContainersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update partial size container' })
  @ApiResponse({ status: 200, description: 'Size container updated' })
  @ApiResponse({ status: 404, description: 'Size container not found' })
  async updatePartial(
    @Param('id') id: string,
    @Body() updateSizeContainerDto: UpdateSizeContainerDto,
  ) {
    return this.sizeContainersService.updatePartial(id, updateSizeContainerDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update full size container' })
  @ApiResponse({ status: 200, description: 'Size container updated' })
  @ApiResponse({ status: 404, description: 'Size container not found' })
  async updateFull(
    @Param('id') id: string,
    @Body() updateSizeContainerDto: UpdateSizeContainerDto,
  ) {
    return this.sizeContainersService.updateFull(id, updateSizeContainerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete size container' })
  @ApiResponse({ status: 200, description: 'Size container deleted' })
  @ApiResponse({ status: 404, description: 'Size container not found' })
  async remove(@Param('id') id: string) {
    return this.sizeContainersService.remove(id);
  }
}
