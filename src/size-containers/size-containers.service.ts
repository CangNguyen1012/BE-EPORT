import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateSizeContainerDto,
  UpdateSizeContainerDto,
} from './dtos/size-containers.dto';

@Injectable()
export class SizeContainersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSizeContainerDto) {
    return await this.prisma.sizeContainer.create({ data });
  }

  async findAll(skip = 0, take = 10) {
    const total = await this.prisma.sizeContainer.count();
    const results = await this.prisma.sizeContainer.findMany({
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
    return await this.prisma.sizeContainer.findUnique({ where: { id } });
  }

  async updatePartial(id: string, data: UpdateSizeContainerDto) {
    return await this.prisma.sizeContainer.update({ where: { id }, data });
  }

  async updateFull(id: string, data: UpdateSizeContainerDto) {
    return await this.prisma.sizeContainer.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.sizeContainer.delete({ where: { id } });
  }
}
