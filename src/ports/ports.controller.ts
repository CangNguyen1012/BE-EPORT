import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Put,
} from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { PortsService } from './ports.service';
import { CreatePortDto, UpdatePortDto } from './dtos/port.dto';

@ApiTags('ports')
@Controller('ports')
export class PortsController {
  constructor(private readonly portsService: PortsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new port' })
  @ApiBody({ type: CreatePortDto })
  @ApiResponse({ status: 201, description: 'Port created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid data.' })
  create(@Body() createPortDto: CreatePortDto) {
    return this.portsService.create(createPortDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get list of all ports' })
  @ApiResponse({
    status: 200,
    description: 'List of ports retrieved successfully.',
  })
  findAll() {
    return this.portsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific port by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Port ID' })
  @ApiResponse({ status: 200, description: 'Port retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Port not found.' })
  findOne(@Param('id') id: string) {
    return this.portsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Partially update a port' })
  @ApiParam({ name: 'id', required: true, description: 'Port ID' })
  @ApiBody({ type: UpdatePortDto })
  @ApiResponse({ status: 200, description: 'Port updated successfully.' })
  @ApiResponse({ status: 404, description: 'Port not found.' })
  updatePartial(@Param('id') id: string, @Body() updatePortDto: UpdatePortDto) {
    return this.portsService.updatePartial(id, updatePortDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Fully update a port' })
  @ApiParam({ name: 'id', required: true, description: 'Port ID' })
  @ApiBody({ type: UpdatePortDto })
  @ApiResponse({ status: 200, description: 'Port updated successfully.' })
  @ApiResponse({ status: 404, description: 'Port not found.' })
  updateFull(@Param('id') id: string, @Body() updatePortDto: UpdatePortDto) {
    return this.portsService.updateFull(id, updatePortDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a port' })
  @ApiParam({ name: 'id', required: true, description: 'Port ID' })
  @ApiResponse({ status: 200, description: 'Port deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Port not found.' })
  remove(@Param('id') id: string) {
    return this.portsService.remove(id);
  }

  @Post('sync')
  @ApiOperation({ summary: 'Sync ports from a source (e.g. an API)' })
  @ApiResponse({ status: 200, description: 'Sync finished successfully.' })
  @ApiResponse({ status: 400, description: 'Sync failed.' })
  sync() {
    return this.portsService.sync();
  }
}
