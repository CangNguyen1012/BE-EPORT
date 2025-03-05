import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCountryDto {
  @ApiProperty({ example: 'US', description: 'Country code' })
  @IsString()
  @IsNotEmpty()
  countryCode: string;

  @ApiProperty({ example: 'United States', description: 'Country name' })
  @IsString()
  @IsNotEmpty()
  countryName: string;
}

export class UpdateCountryDto {
  @ApiProperty({ example: 'United States', required: false })
  @IsString()
  @IsNotEmpty()
  countryName?: string;
}
