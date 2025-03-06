import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LanguagesModule } from './languages/languages.module';
import { PrismaService } from './prisma/prisma.service';
import { CountriesModule } from './countries/countries.module';
import { CustomerTypesModule } from './customer-types/customer-types.module';

@Module({
  imports: [UsersModule, LanguagesModule, CountriesModule, CustomerTypesModule],
  providers: [PrismaService],
})
export class AppModule {}
