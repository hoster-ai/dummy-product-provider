import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsMongoId,
  IsDefined,
  IsEnum,
  IsIP,
  IsNumber,
} from 'class-validator';
import { DurationEnum } from '../enums/duration.enum';
import { IpTypeEnum } from '../enums/ip-type.enum';

class IpDto {
  /**
   * IP address
   */
  @IsIP()
  @IsDefined()
  @ApiProperty({
    type: String,
    example: '1.1.1.1',
    description: 'IP address',
  })
  address: string;

  /**
   * IP range
   */
  @IsNumber()
  @IsDefined()
  @ApiProperty({
    type: Number,
    title: 'IP range',
    description: 'IP range',
  })
  range: number;

  /**
   * Type of IP
   */
  @IsEnum(IpTypeEnum)
  @IsDefined()
  @ApiProperty({
    enum: IpTypeEnum,
    example: IpTypeEnum.IPv4,
    description: 'Type of IP',
  })
  type: IpTypeEnum;
}

export class ProductDataDto {
  @IsOptional()
  @IsMongoId()
  @ApiProperty({
    type: String,
    example: '5ce45d7606444f199acfba1e',
  })
  id: string;

  @IsDefined()
  @ApiProperty({
    type: Object,
    title: 'Provider options',
  })
  options: Record<string, unknown>[];

  @IsDefined()
  @ApiProperty({
    title: 'Provider meta',
  })
  meta: any;

  @IsDefined()
  @IsEnum(DurationEnum)
  @ApiProperty({
    enum: DurationEnum,
    title: 'Duration in months',
    example: DurationEnum.ONE_YEAR,
  })
  duration: DurationEnum;

  @IsOptional()
  @ApiPropertyOptional({
    type: IpDto,
    isArray: true,
  })
  ips?: IpDto[];
}
