import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateImoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  imdgClass: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  un: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  placard: string;
}

export class UpdateImoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  imdgClass?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  un?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  placard?: string;
}
