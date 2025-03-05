import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LanguagesModule } from './languages/languages.module';
import { PrismaService } from './prisma/prisma.service';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [UsersModule, LanguagesModule, CountriesModule],
  providers: [PrismaService],
})
export class AppModule {}
