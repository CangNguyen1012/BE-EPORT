import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReferDto, UpdateReferDto } from './dtos/refer.dto';

@Injectable()
export class RefersService {
  constructor(private prisma: PrismaService) {}

  async findAll(skip = 0, take = 10) {
    const total = await this.prisma.refer.count();
    const results = await this.prisma.refer.findMany({
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
    return await this.prisma.refer.findUnique({ where: { id } });
  }

  async create(data: CreateReferDto) {
    return await this.prisma.refer.create({ data });
  }

  async updatePartial(id: string, data: UpdateReferDto) {
    return await this.prisma.refer.update({ where: { id }, data });
  }

  async updateFull(id: string, data: UpdateReferDto) {
    return await this.prisma.refer.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.refer.delete({ where: { id } });
  }
}
