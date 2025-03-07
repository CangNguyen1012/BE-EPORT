import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LanguagesModule } from './languages/languages.module';
import { PrismaService } from './prisma/prisma.service';
import { CountriesModule } from './countries/countries.module';
import { CustomerTypesModule } from './customer-types/customer-types.module';
import { JobModesModule } from './job-modes/job-modes.module';
import { SizeContainersModule } from './size-containers/size-containers.module';

@Module({
  imports: [
    UsersModule,
    LanguagesModule,
    CountriesModule,
    CustomerTypesModule,
    JobModesModule,
    SizeContainersModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
