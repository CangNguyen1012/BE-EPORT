import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommodityDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  commodityCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  commodityName: string;
}

export class UpdateCommodityDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  commodityCode?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  commodityName?: string;
}
