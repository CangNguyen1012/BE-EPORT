import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePortDto, UpdatePortDto } from './dtos/port.dto';

@Injectable()
export class PortsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePortDto) {
    return await this.prisma.port.create({ data });
  }

  async findAll(skip = 0, take = 10) {
    return await this.prisma.port.findMany({ skip, take });
  }

  async findOne(id: string) {
    return await this.prisma.port.findUnique({ where: { id } });
  }

  async updatePartial(id: string, data: UpdatePortDto) {
    return await this.prisma.port.update({ where: { id }, data });
  }

  async updateFull(id: string, data: UpdatePortDto) {
    return await this.prisma.port.update({ where: { id }, data });
  }

  async remove(id: string) {
    return await this.prisma.port.delete({ where: { id } });
  }

  sync() {
    return { message: 'Đồng bộ thành công bản ghi', success: true };
  }
}
