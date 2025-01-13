import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { FieldDto } from './field.dto';
import { MetaDto } from './meta.response.dto';
import { ProviderInfoDto } from './provider-info.dto';
import { LabelTypeEnum } from 'src/enums/label.type.enum';
import { IsMongoId } from 'class-validator';

export class BaseResponse {
  /**
   * Response code
   */
  @ApiResponseProperty()
  @ApiProperty({
    title: 'Response code', // Title for documentation
    type: Number, // Specifies the type as Number
    example: 200, // Example value
    description: 'Response code', // Description of the property
    required: true, // Indicates that this field is required
    nullable: false, // Specifies that this property cannot be null
  })
  code: number;

  /**
   * Response message
   */
  @ApiResponseProperty()
  @ApiProperty({
    title: 'Response message', // Title for documentation
    type: String,  // Specifies the type as String
    example: 'Ok', // Example value
    description: 'Response message', // Description of the property
    required: true,  // Indicates that this field is required
    nullable: false, // Specifies that this property cannot be null
  })
  message: string;
}

export class InfoResponseDto extends BaseResponse {
  /**
   * Provider information
   */
  @ApiResponseProperty({})
  @ApiProperty({
    title: 'Provider information', // Title for documentation
    description: 'Detailed information about the provider.', // Description for documentation
    type: ProviderInfoDto, // Links the type to the DTO
    required: true, // Indicates the field is required
    readOnly: true, // Specifies the property as read-only
    nullable: false, // Specifies the property cannot be null
  })
  info: ProviderInfoDto;
}

export class SuccessResponseDto extends BaseResponse {
  @IsMongoId()
  @ApiProperty({
    type: String, // Specifies the type as string
    example: "5ce45d7606444f199acfba1e", // Example value
    title: "Id of the product/service owned by the user", // Title for documentation
    description: "Id of the product/service owned by the user", // Detailed description
    required: true, // Indicates this field is required
    format: "uuid", // Format (Mongo ID is generally considered a type of UUID)
  })
  id: string;

  @ApiProperty({
    title: "Data to be returned at the creation of a product",
    type: Object, // Specifies the type as object
    additionalProperties: { type: 'string' }, // Indicates the value of each property is a string
    example: {
      station_id: "This is your Station Id",
      name: "This is your Station Name",
      login_email: "This is your Station Login Email for login via browser",
      login_password: "This is your Station Login Password for login via browser",
      login_url: "This is the Station Login Url",
      source_password: "This is your source password for streaming",
      port: "This is the Port used to connect to the specific azuracast station",
      mount_point: "This is the mountpoint of the specific Station",
    }, // Example object structure
    required: true, // Indicates this field is required
    description:
      "These are all necessary data of the product and are returned during product creation. The <*>(key) is the name of the data and the value(string) is the description of it. For example when an azuracast station product is created the returnMetaKeys will be station_id,name, login_url,login_email,login_password,source_password,port,mount_point. This information is stored on the Hoster and is sent back to the Provider in every POST.",
  })
  item_data?: Record<string, any>;
}


export class ErrorResponseDto extends BaseResponse {
  @ApiProperty({
    title: 'Error message(s)', // Title for documentation
    description: 'An error message or list of error messages',
    example: ['Not implemented'], // Example of the field
    required: false, // Indicates whether the field is required
    nullable: true, // Indicates whether the field can be null
    isArray: false, // Specifies if the property is an array (not used here because `oneOf` covers this)
    type: String, // Fallback type for clarity
    oneOf: [
      { type: 'string', example: 'Not implemented' },
      { type: 'array', items: { type: 'string' }, example: ['Not implemented'] },
    ],
    maxLength: 255, // Maximum length for string values (if applicable)
    minLength: 1, // Minimum length for string values (if applicable)
  })
  errors?: string[] | string;
}

export class ValidateResponseDto extends BaseResponse {
  @ApiResponseProperty()
  @ApiProperty({
    description: 'Indicates a boolean result (true/false).', // Description of the property
    example: true, // Example value
    type: Boolean, // Ensures Swagger understands the type
    required: true, // Indicates the field is required
    nullable: false, // Specifies that this property cannot be null
  })
  result: boolean;

  @ApiResponseProperty()
  @ApiProperty({
    title: 'Product attribute fields validation results',
    type: [FieldDto], // Specifies that this property is an array of FieldDto objects
    example: [
      {
        fieldName: "color",
        fieldValue: "red",
        isValid: true,
      },
    ], // Example value showing the structure of FieldDto
    description: 'List of product attribute fields with validation results.',
    required: false, // Indicates the field is optional
    isArray: true, // Specifies that the property is an array
    nullable: true, // Allows the property to be null
  })
  product_attributes?: FieldDto[];

  @ApiResponseProperty()
  @ApiProperty({
    title: 'Item attribute fields validation results',
    type: [FieldDto], // Specifies that this property is an array of FieldDto objects
    example: [
      {
        fieldName: "size",
        fieldValue: "M",
        isValid: true,
      },
    ], // Example value showing the structure of FieldDto
    description: 'List of item attribute fields with validation results.',
    required: false, // Indicates the field is optional
    isArray: true, // Specifies that the property is an array
    nullable: true, // Allows the property to be null
  })
  item_attributes?: FieldDto[];
}


export class TaskResponseDto extends BaseResponse {
  @ApiResponseProperty()
  @ApiProperty({
    title: 'Task ID', // Title for documentation
    type: String, // Specifies the type as String
    example: "12345", // Example value
    description: 'Unique identifier for the task.', // Description of the property
    required: true, // Indicates the field is required
    nullable: false, // Specifies that this property cannot be null
  })
  taskId: string;
}

export class BooleanResponseDto extends BaseResponse {
  @ApiResponseProperty()
  @ApiProperty({
    title: 'Result', // Title for documentation
    type: Boolean, // Specifies the type as Boolean
    example: true, // Example value
    description: 'Indicates a boolean result (true/false).', // Description of the property
    required: true, // Indicates the field is required
    nullable: false, // Specifies that this property cannot be null
  })
  result: boolean;
}



export class DynamicAttributesResponse {
  @ApiProperty({
    type: [FieldDto],
    example: [
      {
        id: "dist",
        label: "Distribution name",
        value: [],
        default: null,
        type: LabelTypeEnum.SELECT,
        required: true,
        disabled: false,
        hidden: false,
        regexValidation: "",
        remoteValidation: false,
      },
    ],
    required: true, // Indicates the field is required
    nullable: false, // Specifies that this property cannot be null
  })
  field: FieldDto;
}
