import { ApiProperty } from '@nestjs/swagger';

export class ContactDto {
  @ApiProperty()
  terminalCode: string;
  @ApiProperty()
  contactName: string;
  @ApiProperty()
  contactGroupName: string;
  @ApiProperty()
  contactTel: string;
  @ApiProperty()
  contactZaloID: string;
  @ApiProperty()
  contactFacebookID: string;
  @ApiProperty()
  contactEmail: string;
  @ApiProperty()
  contactWebsite: string;
  @ApiProperty()
  contactWebsiteURL: string;
  @ApiProperty()
  constactAddress?: string;
}
