import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommodityDto, UpdateCommodityDto } from './dtos/commodity.dto';

@Injectable()
export class CommoditiesService {
  constructor(private prisma: PrismaService) {}

  async findAll(skip = 0, take = 10) {
    const total = await this.prisma.commodity.count();
    const results = await this.prisma.commodity.findMany({
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
    return await this.prisma.commodity.findUnique({ where: { id } });
  }

  async create(data: CreateCommodityDto) {
    return await this.prisma.commodity.create({ data });
  }

  async updatePartial(id: string, data: UpdateCommodityDto) {
    return await this.prisma.commodity.update({ where: { id }, data });
  }

  async updateFull(id: string, data: UpdateCommodityDto) {
    return await this.prisma.commodity.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.commodity.delete({ where: { id } });
  }
}
