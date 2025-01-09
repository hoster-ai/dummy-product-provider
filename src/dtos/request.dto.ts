import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsObject, IsOptional } from "class-validator";
import { ProductDataDto } from "./product-data.dto";
import { UserDataDto } from "./user-data.dto";

export class RequestDto {
  @IsDefined()
  @IsObject()
  @ApiProperty({
    type: UserDataDto, // Specifies the type as UserDataDto
    description: "Here the Hoster sends the User's Data",
    title: 'User(Customer) Data', // Title for better clarity
    required: true, // Marks the field as required
  })
  userData: UserDataDto;

  @IsDefined()
  @IsObject()
  @ApiProperty({
    type: ProductDataDto, // Specifies the type as ProductDataDto
    title: 'Product/Service Data', // Title of the property
    description: "Here the Hoster sends the User's Product/service Data with any changes made.",
    required: true, // Marks the field as required
  })
  productData: ProductDataDto;

  @IsDefined()
  @IsObject()
  @ApiProperty({
    type: ProductDataDto, // Specifies the type as ProductDataDto
    title: 'Previous Product/Service Data', // Title of the property
    description: "Here the Hoster sends the User's Product/Service Data as it was before any changes were requested(require).",
    required: false, // Marks the field as optional
  })
  previousProductData?: ProductDataDto;
}

export class ValidateRequestDto {
  @ApiProperty({
    type: String,
    description: "id of Attribute that requires remote validation.",
    example: "station_name"
  })
  fieldToBeValidated: string;

  @ApiProperty({
    type: Object,
    additionalProperties: true,
    description: "Attribute fields to be used for Remote Validation.The key is the id of the feature as a string and the value is of any type'",
    example: [
      {
        max_listeners_id: 15,
        hdd_id: '1G',
        station_name_id: 'MyStation'
      }
    ]
  })
  fields: Record<string, any>;
}

export class DynamicItemAttributeRequest{
  @ApiProperty({
    type: String,
    description: "id of the Attribute that requires Dynamic load.",
    example: "station_name"
  })
  itemAttributeToBeReturned: string;

  @ApiProperty({
    type: Object,
    additionalProperties: true,
    title: "Product Attributes",
    example: {
      max_listeners: 15,
      hdd: "1G",
      station_name: "MyStation",
    },
    description:
      "Product_attributes are all the attributes of a specific product. These are the attributes of the product as chosen by the seller when creating it. The key is the name of the attribute as a key and the value is of <b>any</b> type",
  })
  product_attributes: Record<string, any>;
}