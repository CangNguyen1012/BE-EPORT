import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCustomerTypeDto {
  @ApiProperty({ example: 'CH' })
  @IsString()
  @IsNotEmpty()
  customerTypeCode: string;

  @ApiProperty({ example: 'Chu Hang' })
  @IsString()
  @IsNotEmpty()
  customerTypeName: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  userGroupRank: number;
}

export class UpdateCustomerTypeDto {
  @ApiProperty({ example: 'CH', required: false })
  @IsString()
  @IsNotEmpty()
  customerTypeCode?: string;

  @ApiProperty({ example: 'Chu Hang', required: false })
  @IsString()
  @IsNotEmpty()
  customerTypeName?: string;

  @ApiProperty({ example: 1, required: false })
  @IsNumber()
  @IsNotEmpty()
  userGroupRank?: number;
}
