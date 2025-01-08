import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { FieldDto } from './field.dto';
import { MetaDto } from './meta.response.dto';
import { ProviderInfoDto } from './provider-info.response.dto';

class BaseResponse {
  /**
   * Response code
   */
  @ApiResponseProperty({
    type: Number,
    example: 200,
  })
  @ApiProperty({
    description: 'Response code',
  })
  code: number;

  /**
   * Response message
   */
  @ApiResponseProperty({
    type: String,
    example: 'Ok',
  })
  @ApiProperty({
    description: 'Response message',
  })
  message: string;
}

export class InfoResponseDto extends BaseResponse {
  /**
   * Provider information
   */
  @ApiResponseProperty({
    type: ProviderInfoDto,
  })
  @ApiProperty({
    description: 'Provider information',
  })
  info: ProviderInfoDto;
}

export class MetaResponseDto extends BaseResponse {
  /**
   * Meta information
   */
  @ApiResponseProperty({
    example: MetaDto,
  })
  @ApiProperty({
    description: 'Meta information',
  })
  meta?: MetaDto;
}

export class ErrorResponseDto extends BaseResponse {
  @ApiResponseProperty({
    example: 'Not implemented',
  })
  errors?: string[] | string;
}

export class AttributeFieldsValidationResponse extends BaseResponse {
  @ApiResponseProperty({
    type: [FieldDto],
  })
  product_attributes?: FieldDto[];

  @ApiResponseProperty({
    type: [FieldDto],
  })
  item_attributes?: FieldDto[];
}

export class ValidateResponseDto extends BaseResponse {
  result: boolean;

  fields?: FieldDto[];
}

export class TaskResponseDto extends BaseResponse {
  taskId: string;
}

export class BooleanResponseDto extends BaseResponse {
  @ApiResponseProperty({
    type: Boolean,
    example: true,
  })
  result: boolean;
}
