import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateJobModeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  jobModeCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  jobModeName: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isLoLo?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isCfsStuff?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isCfsUnstuff?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isCfsChange?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isServiceYard?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isServiceNoncont?: boolean;

  @ApiProperty()
  @IsOptional()
  extraMode?: number;
}

export class UpdateJobModeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  jobModeCode?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  jobModeName?: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isLoLo?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isCfsStuff?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isCfsUnstuff?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isCfsChange?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isServiceYard?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isServiceNoncont?: boolean;

  @ApiProperty()
  @IsOptional()
  extraMode?: number;
}
