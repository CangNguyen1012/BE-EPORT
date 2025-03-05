import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Đánh dấu module này là global để không cần import vào từng module khác
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
