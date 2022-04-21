import { ApiResponseProperty } from '@nestjs/swagger';
import { MetaDto } from './meta.response.dto';

export class ChargeResponseDto {
  @ApiResponseProperty({
    example: 1646823311,
  })
  timestamp: number;

  @ApiResponseProperty({
    example: { cpu: 1, ram: 2 },
  })
  variants: { [key: string]: string | number };

  @ApiResponseProperty({ type: MetaDto })
  meta: MetaDto;
}
