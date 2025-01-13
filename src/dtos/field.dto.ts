import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { LabelTypeEnum } from '../enums/label.type.enum';
import { LanguageEnum } from 'src/enums/language.enum';
import { IsDefined, IsEnum, IsString } from 'class-validator';

export class MultilangTextDto {
  @IsEnum(LanguageEnum)
  @IsDefined()
  @ApiProperty({
    enum: Object.values(LanguageEnum),
    title: "Language",
    example: LanguageEnum.EL,
  })
  language: LanguageEnum;

  @IsString()
  @IsDefined()
  @ApiProperty({
    type: String,
    title: 'Text',
    example: "Κείμενο",
  })
  text: string;
}

export class FieldDto {
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
    title: 'Label',
    description: 'A multilingual label for the field.',
    type: [MultilangTextDto],
    required: true,
    isArray: true,
    example: [{ language: 'EN', text: 'Service Category' }],
  })
  label: MultilangTextDto[];

  /**
   * Value of action field
   */
  @ApiResponseProperty()
  @ApiProperty({
    title: 'Value',
    description: 'The value chosen by the user. Can be a string, number, or key-value object.',
    oneOf: [
      { type: 'string' },
      { type: 'number' },
      { type: 'object', additionalProperties: { type: 'any' } },
    ],
    required: true,
    example: 42,
  })
  value: string | number | Record<string, any>;


  /**
   * Type of label
   */
  @ApiResponseProperty()
  @ApiProperty({
    title: 'Type',
    description: 'The type of the field.',
    enum: LabelTypeEnum,
    required: true,
    example: LabelTypeEnum.CHECKBOX,
  })
  type: LabelTypeEnum;

  /**
   * Indicates if the field is required
   */
  @ApiResponseProperty()
  @ApiProperty({
    type: Boolean,
    title: 'Required',
    description: 'Indicates if the field is required.',
    required: false,
    example: true,
  })
  required: boolean;

  /**
   * Indicates if the field is disabled
   */
  @ApiResponseProperty()
  @ApiProperty({
    type: Boolean,
    title: 'Disabled',
    description: 'Indicates if the field is disabled.',
    required: false,
    example: false,
  })
  disabled: boolean;

  /**
   * Indicates if the field is hidden
   */
  @ApiResponseProperty()
  @ApiProperty({
    type: Boolean,
    title: 'Hidden',
    description: 'Indicates if the field is hidden.',
    required: false,
    example: false,
  })
  hidden: boolean;

  /**
   * Regex validation pattern for the field
   */
  @ApiResponseProperty()
  @ApiProperty({
    type: String,
    title: 'Regex Validation',
    description: 'A string representing a regular expression for validation.',
    required: false,
    example: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
  })
  regexValidation?: string;

  @ApiProperty({
    title: 'Regex Validation Error Message',
    description: 'Multilingual error message for regex validation.',
    type: [MultilangTextDto],
    required: false,
    isArray:true,
    example: [{ language: 'EN', text: 'Invalid email format.' }],
  })
  regexValidationErrorMessage?: MultilangTextDto[];

  /**
   * Indicates if the field has remote validation
   */
  @ApiResponseProperty()
  @ApiProperty({
    type: Boolean,
    title: 'Remote Validation',
    description: 'Indicates if the field requires remote validation.',
    required: false,
    example: true,
  })
  remoteValidation?: boolean;

  /**
   * Error message for the field
   */
  @ApiResponseProperty()
  @ApiProperty({
    title: 'Remote Validation Error Message',
    description: 'Multilingual error message for remote validation.',
    type: [MultilangTextDto],
    required: false,
    isArray:true,
    example: [{ language: 'EN', text: 'Remote validation failed.' }],
  })
  remoteValidationErrorMessage?: MultilangTextDto[];

  @ApiResponseProperty()
  @ApiProperty({
    title: 'Is Dynamic Attribute',
    description: 'If dynamic is set to true it means that this particular addon/attribute is dynamic and its values change the available values on other attributes. This will trigger a call from the hoster to the integration in the dynamic-attribute path, which will return the actual fields affected.',
    example: true,
    type: Boolean,
    required: false,
  })
  isDynamic?: boolean = false;

}
