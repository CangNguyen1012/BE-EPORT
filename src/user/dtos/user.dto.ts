import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'john_doe', description: 'The username' })
  username: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'The email address',
  })
  email: string;
}
