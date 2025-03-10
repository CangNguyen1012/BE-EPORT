import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePortDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  portCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  portName: string;
}
export class UpdatePortDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  portCode?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  portName?: string;
}
