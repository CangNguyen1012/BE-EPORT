import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLanguageDto {
  @ApiProperty({ example: 'en', description: 'Language code' })
  @IsString()
  @IsNotEmpty()
  languageCode: string;

  @ApiProperty({ example: 'English', description: 'Language name' })
  @IsString()
  @IsNotEmpty()
  languageName: string;
}

export class UpdateLanguageDto {
  @ApiProperty({ example: 'English', required: false })
  @IsString()
  @IsNotEmpty()
  languageName?: string;
}
