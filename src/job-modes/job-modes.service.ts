import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJobModeDto, UpdateJobModeDto } from './dtos/job-mode.dto';

@Injectable()
export class JobModesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateJobModeDto) {
    return await this.prisma.jobMode.create({ data });
  }

  async findAll(skip = 0, take = 10) {
    const total = await this.prisma.jobMode.count();
    const results = await this.prisma.jobMode.findMany({
      skip: Number(skip),
      take: Number(take),
    });

    return {
      statusCode: 200,
      data: {
        page: Math.floor(skip / take) + 1,
        limit: take,
        total,
        results,
      },
      timestamp: new Date().toISOString(),
    };
  }

  async findOne(id: string) {
    return await this.prisma.jobMode.findUnique({ where: { id } });
  }

  async updatePartial(id: string, data: UpdateJobModeDto) {
    return await this.prisma.jobMode.update({ where: { id }, data });
  }

  async updateFull(id: string, data: UpdateJobModeDto) {
    return await this.prisma.jobMode.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.jobMode.delete({ where: { id } });
  }
}
