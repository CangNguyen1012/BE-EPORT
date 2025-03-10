import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOperationDto, UpdateOperationDto } from './dtos/operation.dto';

@Injectable()
export class OperationsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return {
      statusCode: 200,
      data: await this.prisma.operation.findMany(),
      timestamp: new Date().toISOString(),
    };
  }

  async findOne(id: string) {
    return await this.prisma.operation.findUnique({ where: { id } });
  }

  async create(data: CreateOperationDto) {
    return await this.prisma.operation.create({ data });
  }

  async updatePartial(id: string, data: UpdateOperationDto) {
    return await this.prisma.operation.update({ where: { id }, data });
  }

  async updateFull(id: string, data: UpdateOperationDto) {
    return await this.prisma.operation.update({ where: { id }, data });
  }

  async remove(id: string) {
    return await this.prisma.operation.delete({ where: { id } });
  }
}
