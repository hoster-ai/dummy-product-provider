import { ApiProperty } from '@nestjs/swagger';

export class MetaDto {
  /**
   * Public metadata
   */
  @ApiProperty({
    example: [],
    description: 'Public metadata',
    type: 'array'
  })
  public: any;

  /**
   * Private metadata
   */
  @ApiProperty({
    example: [],
    description: 'Private metadata',
    type: 'array'
  })
  private: any;
}
