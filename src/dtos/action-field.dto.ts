import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { LabelTypeEnum } from '../enums/label.type.enum';

export class ActionFieldDto {
  /**
   * ID of action field
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "ID of action field",
    type: String,
  })
  id: string;

  /**
   * Label of action field
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Label of action field",
    type: String,
  })
  label: string;

  /**
   * Value of action field
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Value of action field",
    oneOf: [
      { type: 'number' },
      { type: 'string' },
      { type: 'object', additionalProperties: { type: 'string' } },
    ],
  })
  value: string | number | { [key: string]: string };

  /**
   * Type of label
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Type of label",
    enum: LabelTypeEnum,
  })
  type: LabelTypeEnum;

  /**
   * Indicates if the field is required
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Indicates if the field is required",
    type: Boolean,
  })
  required: boolean;

  /**
   * Indicates if the field is disabled
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Indicates if the field is disabled",
    type: Boolean,
  })
  disabled: boolean = false;

  /**
   * Indicates if the field is hidden
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Indicates if the field is hidden",
    type: Boolean,
  })
  hidden: boolean = false;

  /**
   * Regex validation pattern for the field
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Regex validation pattern for the field",
    type: String,
  })
  regexValidation: string;

  /**
   * Indicates if the field has remote validation
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Indicates if the field has remote validation",
    type: Boolean,
  })
  remoteValidation: boolean;

  /**
   * Error message for the field
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Error message for the field",
    type: String
  })
  error?: string;
}
