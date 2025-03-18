import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Adjust the path as needed

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async getContacts(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [results, total] = await Promise.all([
      this.prisma.contact.findMany({
        skip,
        take: limit,
      }),
      this.prisma.contact.count(),
    ]);

    return {
      statusCode: 200,
      data: {
        page,
        limit,
        total,
        results,
      },
      timestamp: new Date().toISOString(),
    };
  }
}
