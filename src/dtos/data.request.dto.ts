import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsObject } from 'class-validator';
import { ProductDataDto as ProductDataDto } from './product-data.request.dto';
import { UserDataDto as UserDataDto } from './user-data.request.dto';

export class RequestDto {
  /**
   * User data
   */
  @IsDefined()
  @IsObject()
  @ApiProperty({ type: UserDataDto, description: "User data" })
  userData: UserDataDto;

  /**
   * Product data
   */
  @IsDefined()
  @IsObject()
  @ApiProperty({ type: ProductDataDto, description: "Product data" })
  productData: ProductDataDto;
}
