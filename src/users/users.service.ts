import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  async findAll(skip = 0, take = 10) {
    return this.prisma.user.findMany({ skip, take });
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // Partial update (PATCH)
  async updatePartial(id: string, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({ where: { id }, data });
  }

  // Full update (PUT) - Ensure all required fields are present
  async updateFull(id: string, data: Prisma.UserUpdateInput) {
    // Validate that all necessary fields are included to prevent accidental data loss
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
