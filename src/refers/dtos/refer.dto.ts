import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateReferDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  operationCode: string;

  @ApiProperty()
  @IsString()
  refName?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  applyDate: Date; // Will be converted to UTC -7 in schema

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  expireDate: Date; // Will be converted to UTC -7 in schema

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  rounding: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  moneyCredit: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  hourAdding: number;
}
export class UpdateReferDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  operationCode?: string;

  @ApiProperty()
  @IsString()
  refName?: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  applyDate?: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  expireDate?: Date;

  @ApiProperty()
  @IsString()
  rounding?: string;

  @ApiProperty()
  @IsString()
  moneyCredit?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  hourAdding?: number;
}
