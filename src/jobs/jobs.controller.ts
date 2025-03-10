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
  BadRequestException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiQuery,
  ApiResponse,
  ApiOperation,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { JobsService } from './jobs.service';
import { CreateJobDto, UpdateJobDto } from './dtos/job.dto';

@ApiTags('jobs')
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a job' })
  @ApiBody({ type: CreateJobDto })
  @ApiResponse({
    status: 201,
    description: 'The job has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(@Body() createJobDto: CreateJobDto) {
    try {
      return await this.jobsService.create(createJobDto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all jobs' })
  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'take', required: false })
  @ApiResponse({
    status: 200,
    description: 'The jobs have been successfully retrieved.',
  })
  async findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return await this.jobsService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a job by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the job to retrieve' })
  @ApiResponse({
    status: 200,
    description: 'The job has been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'The job does not exist' })
  async findOne(@Param('id') id: string) {
    const job = await this.jobsService.findOne(id);
    if (!job) {
      throw new BadRequestException('The job does not exist');
    }
    return job;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a job partially' })
  @ApiParam({ name: 'id', description: 'The ID of the job to update' })
  @ApiBody({ type: UpdateJobDto })
  @ApiResponse({
    status: 200,
    description: 'The job has been successfully updated.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async updatePartial(
    @Param('id') id: string,
    @Body() updateJobDto: UpdateJobDto,
  ) {
    try {
      return await this.jobsService.updatePartial(id, updateJobDto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a job fully' })
  @ApiParam({ name: 'id', description: 'The ID of the job to update' })
  @ApiBody({ type: UpdateJobDto })
  @ApiResponse({
    status: 200,
    description: 'The job has been successfully updated.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async updateFull(
    @Param('id') id: string,
    @Body() updateJobDto: UpdateJobDto,
  ) {
    try {
      return await this.jobsService.updateFull(id, updateJobDto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a job' })
  @ApiParam({ name: 'id', description: 'The ID of the job to delete' })
  @ApiResponse({
    status: 200,
    description: 'The job has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'The job does not exist' })
  async remove(@Param('id') id: string) {
    const job = await this.jobsService.remove(id);
    if (!job) {
      throw new BadRequestException('The job does not exist');
    }
    return job;
  }
}
