import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LanguagesModule } from './languages/languages.module';
import { PrismaService } from './prisma/prisma.service';
import { CountriesModule } from './countries/countries.module';
import { CustomerTypesModule } from './customer-types/customer-types.module';
import { JobModesModule } from './job-modes/job-modes.module';
import { SizeContainersModule } from './size-containers/size-containers.module';
import { RefersModule } from './refers/refers.module';
import { CommoditiesModule } from './commodities/commodities.module';
import { JobsModule } from './jobs/jobs.module';
import { PortsModule } from './ports/ports.module';
import { OperationsModule } from './operations/operations.module';

@Module({
  imports: [
    UsersModule,
    LanguagesModule,
    CountriesModule,
    CustomerTypesModule,
    JobModesModule,
    SizeContainersModule,
    RefersModule,
    CommoditiesModule,
    JobsModule,
    PortsModule,
    OperationsModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
