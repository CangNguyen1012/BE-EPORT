import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CountriesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CountryCreateInput) {
    return this.prisma.country.create({ data });
  }

  async findAll(skip = 0, take = 10) {
    return this.prisma.country.findMany({ skip, take });
  }

  async findOne(id: string) {
    return this.prisma.country.findUnique({ where: { id } });
  }

  async updatePartial(id: string, data: Prisma.CountryUpdateInput) {
    return this.prisma.country.update({ where: { id }, data });
  }

  async updateFull(id: string, data: Prisma.CountryUpdateInput) {
    return this.prisma.country.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.country.delete({ where: { id } });
  }
}
