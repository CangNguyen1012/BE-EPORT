import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSizeContainerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  operationCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  localSizeType: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  isoSizeType: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cargoTypeCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  emptyCargoTypeCode: string;
}

export class UpdateSizeContainerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  operationCode?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  localSizeType?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  isoSizeType?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cargoTypeCode?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  emptyCargoTypeCode?: string;
}
