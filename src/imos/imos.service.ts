import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateImoDto, UpdateImoDto } from './dtos/imo.dto';

@Injectable()
export class ImosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateImoDto) {
    return await this.prisma.imo.create({ data });
  }

  async findAll(skip = 0, take = 10) {
    const total = await this.prisma.imo.count();
    const results = await this.prisma.imo.findMany({
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
    return await this.prisma.imo.findUnique({ where: { id } });
  }

  async updatePartial(id: string, data: UpdateImoDto) {
    return await this.prisma.imo.update({ where: { id }, data });
  }

  async updateFull(id: string, data: UpdateImoDto) {
    return await this.prisma.imo.update({ where: { id }, data });
  }

  async remove(id: string) {
    return await this.prisma.imo.delete({ where: { id } });
  }
}
