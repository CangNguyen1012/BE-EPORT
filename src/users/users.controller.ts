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
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';
import {
  ApiTags,
  ApiQuery,
  ApiResponse,
  ApiOperation,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of users with pagination' })
  @ApiQuery({
    name: 'skip',
    required: false,
    example: 0,
    description: 'Number of users to skip',
  })
  @ApiQuery({
    name: 'take',
    required: false,
    example: 10,
    description: 'Number of users to retrieve',
  })
  @ApiResponse({
    status: 200,
    description: 'List of users retrieved successfully.',
  })
  findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return this.usersService.findAll(Number(skip), Number(take));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single user by ID' })
  @ApiParam({ name: 'id', example: '123', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'User not found' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  // Partial update (PATCH)
  @Patch(':id')
  @ApiOperation({ summary: 'Partially update a user' })
  @ApiParam({ name: 'id', example: '123', description: 'User ID' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'User updated successfully.' })
  @ApiResponse({ status: 404, description: 'User not found' })
  updatePartial(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updatePartial(id, updateUserDto);
  }

  // Full update (PUT)
  @Put(':id')
  @ApiOperation({ summary: 'Fully update a user' })
  @ApiParam({ name: 'id', example: '123', description: 'User ID' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'User updated successfully.' })
  @ApiResponse({ status: 404, description: 'User not found' })
  updateFull(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateFull(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user' })
  @ApiParam({ name: 'id', example: '123', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User deleted successfully.' })
  @ApiResponse({ status: 404, description: 'User not found' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
