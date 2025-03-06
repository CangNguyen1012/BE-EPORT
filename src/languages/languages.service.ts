import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LanguagesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.LanguageCreateInput) {
    return this.prisma.language.create({ data });
  }

  async findAll(skip = 0, take = 10) {
    return this.prisma.language.findMany({ skip, take });
  }

  async findOne(id: string) {
    return this.prisma.language.findUnique({ where: { id } });
  }

  async updatePartial(id: string, data: Prisma.LanguageUpdateInput) {
    return this.prisma.language.update({ where: { id }, data });
  }

  async updateFull(id: string, data: Prisma.LanguageUpdateInput) {
    return this.prisma.language.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.language.delete({ where: { id } });
  }
}
