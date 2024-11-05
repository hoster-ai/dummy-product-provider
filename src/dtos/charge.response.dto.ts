import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { MetaDto } from './meta.response.dto';

export class ChargeResponseDto {
  /**
   * Timestamp of the charge response
   */
  @ApiResponseProperty({
    example: 1646823311,
  })
  @ApiProperty({
    description: "Timestamp of the charge response"
  })
  timestamp: number;

  /**
   * Variants of the charge response
   */
  @ApiResponseProperty({
    example: { cpu: 1, ram: 2 },
  })
  @ApiProperty({
    description: "Variants of the charge response"
  })
  variants: { [key: string]: string | number };

  /**
   * Meta information of the charge response
   */
  @ApiResponseProperty({ type: MetaDto })
  @ApiProperty({
    description: "Meta information of the charge response"
  })
  meta: MetaDto;
}
