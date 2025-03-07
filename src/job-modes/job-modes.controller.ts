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
import { JobModesService } from './job-modes.service';
import { CreateJobModeDto, UpdateJobModeDto } from './dtos/job-mode.dto';

@ApiTags('Job Modes')
@Controller('job-modes')
export class JobModesController {
  constructor(private readonly jobModesService: JobModesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new job mode' })
  @ApiBody({ type: CreateJobModeDto })
  @ApiResponse({
    status: 201,
    description: 'The job mode has been successfully created.',
  })
  create(@Body() data: CreateJobModeDto) {
    return this.jobModesService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all job modes' })
  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'take', required: false })
  @ApiResponse({
    status: 200,
    description: 'The job modes have been successfully retrieved.',
  })
  findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return this.jobModesService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a job mode by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the job mode' })
  @ApiResponse({
    status: 200,
    description: 'The job mode has been successfully retrieved.',
  })
  findOne(@Param('id') id: string) {
    return this.jobModesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a job mode partially' })
  @ApiParam({ name: 'id', description: 'The ID of the job mode' })
  @ApiBody({ type: UpdateJobModeDto })
  @ApiResponse({
    status: 200,
    description: 'The job mode has been successfully updated.',
  })
  updatePartial(@Param('id') id: string, @Body() data: UpdateJobModeDto) {
    return this.jobModesService.updatePartial(id, data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a job mode fully' })
  @ApiParam({ name: 'id', description: 'The ID of the job mode' })
  @ApiBody({ type: UpdateJobModeDto })
  @ApiResponse({
    status: 200,
    description: 'The job mode has been successfully updated.',
  })
  updateFull(@Param('id') id: string, @Body() data: UpdateJobModeDto) {
    return this.jobModesService.updateFull(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a job mode' })
  @ApiParam({ name: 'id', description: 'The ID of the job mode' })
  @ApiResponse({
    status: 204,
    description: 'The job mode has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.jobModesService.remove(id);
  }
}
