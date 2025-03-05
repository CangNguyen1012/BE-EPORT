import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LanguagesModule } from './languages/languages.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UsersModule, LanguagesModule],
  providers: [PrismaService],
})
export class AppModule {}
