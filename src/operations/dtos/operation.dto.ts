import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOperationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  operationCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  operationName: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isEdo: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  edoNote: boolean;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  isLocalForeign?: string | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  moneyCredit?: string | null;
}

export class UpdateOperationDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  operationCode?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  operationName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isEdo?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  edoNote?: boolean;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  isLocalForeign?: string | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  moneyCredit?: string | null;
}
