import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { LabelTypeEnum } from '../enums/label.type.enum';

export class ActionFieldDto {
  /**
   * ID of action field
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "ID of action field"
  })
  id: string;

  /**
   * Label of action field
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Label of action field"
  })
  label: string;

  /**
   * Value of action field
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Value of action field"
  })
  value: string | number | { [key: string]: string };

  /**
   * Type of label
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Type of label"
  })
  type: LabelTypeEnum;

  /**
   * Indicates if the field is required
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Indicates if the field is required"
  })
  required: boolean;

  /**
   * Indicates if the field is disabled
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Indicates if the field is disabled"
  })
  disabled = false;

  /**
   * Indicates if the field is hidden
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Indicates if the field is hidden"
  })
  hidden = false;

  /**
   * Regex validation pattern for the field
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Regex validation pattern for the field"
  })
  regexValidation: string;

  /**
   * Indicates if the field has remote validation
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Indicates if the field has remote validation"
  })
  remoteValidation: boolean;

  /**
   * Error message for the field
   */
  @ApiResponseProperty()
  @ApiProperty({ 
    description: "Error message for the field"
  })
  error?: string;
}
