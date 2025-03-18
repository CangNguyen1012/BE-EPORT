import { Module } from '@nestjs/common';
import { ContactService } from './contacts.service';
import { ContactsController } from './contacts.controller';

@Module({
  providers: [ContactService],
  controllers: [ContactsController],
})
export class ContactsModule {}
