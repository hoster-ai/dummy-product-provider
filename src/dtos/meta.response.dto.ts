import { ApiProperty } from '@nestjs/swagger';

export class MetaDto {
  /**
   * Public metadata
   */
  @ApiProperty({
    example: [],
    description: 'Public metadata',
  })
  public: any;

  /**
   * Private metadata
   */
  @ApiProperty({
    example: [],
    description: 'Private metadata',
  })
  private: any;
}
