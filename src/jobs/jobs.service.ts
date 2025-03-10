import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJobDto, UpdateJobDto } from './dtos/job.dto';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateJobDto) {
    return this.prisma.job.create({ data });
  }

  async findAll(skip = 0, take = 10) {
    const total = await this.prisma.job.count();
    const results = await this.prisma.job.findMany({
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
    return await this.prisma.job.findUnique({ where: { id } });
  }

  async updatePartial(id: string, data: UpdateJobDto) {
    return this.prisma.job.update({ where: { id }, data });
  }

  async updateFull(id: string, data: UpdateJobDto) {
    return await this.prisma.job.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.job.delete({ where: { id } });
  }
}
