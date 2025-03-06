import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerTypesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CustomerTypeCreateInput) {
    return this.prisma.customerType.create({ data });
  }

  async findAll(skip = 0, take = 10) {
    return this.prisma.customerType.findMany({ skip, take });
  }

  async findOne(id: string) {
    return this.prisma.customerType.findUnique({ where: { id } });
  }

  async updatePartial(id: string, data: Prisma.CustomerTypeUpdateInput) {
    return this.prisma.customerType.update({ where: { id }, data });
  }

  async updateFull(id: string, data: Prisma.CustomerTypeUpdateInput) {
    return this.prisma.customerType.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.customerType.delete({ where: { id } });
  }
}
