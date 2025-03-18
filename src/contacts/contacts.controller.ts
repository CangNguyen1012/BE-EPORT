import { Controller, Get, Query, HttpCode } from '@nestjs/common';
import { ContactService } from './contacts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('contacts')
@ApiTags('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get all contacts with pagination' })
  @ApiResponse({ status: 200, description: 'List of contacts' })
  async findAll(@Query('page') page = '1', @Query('limit') limit = '1') {
    const pageNumber = Math.max(parseInt(page, 10) || 1, 1);
    const limitNumber = Math.max(parseInt(limit, 10) || 1, 1);

    return await this.contactsService.getContacts(pageNumber, limitNumber);
  }
}
