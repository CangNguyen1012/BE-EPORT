import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateJobDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  jobCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  jobName: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isQuay: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isYard: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isGate: boolean;
}

export class UpdateJobDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  jobCode?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  jobName?: string;

  @ApiProperty()
  @IsBoolean()
  isQuay?: boolean;

  @ApiProperty()
  @IsBoolean()
  isYard?: boolean;

  @ApiProperty()
  @IsBoolean()
  isGate?: boolean;
}
