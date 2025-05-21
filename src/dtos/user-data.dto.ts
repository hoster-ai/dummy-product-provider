import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CountryEnum } from '../enums/country.enum';

export class UserDataDto {
  /**
   * ID of the user
   */
  @IsOptional()
  @IsMongoId()
  @ApiProperty({
    type: String,
    example: '5ce45d7606444f199acfba1e',
    description: 'ID of the user making the purchase',
  })
  id: string;

  /**
   * Parent ID of the user
   */
  @IsOptional()
  @IsMongoId()
  @ApiProperty({
    type: String,
    example: '5ce45d7606444f199acfba1e',
    description: 'Id of the company making the request',
  })
  companyId?: string;

  /**
   * Email of the user
   */
  @IsDefined()
  @IsEmail()
  @ApiProperty({
    type: String,
    title: 'Email',
    example: 'email@example.com',
    description: 'Email of the user/invoice recipient',
  })
  email: string;

  /**
   * First name of the user
   */
  @IsDefined()
  @IsString()
  @ApiProperty({
    type: String,
    title: 'First Name',
    example: 'Fname',
    description: 'First name of the user/invoice recipient',
  })
  firstName: string;

  /**
   * Last name of the user
   */
  @IsDefined()
  @IsString()
  @ApiProperty({
    type: String,
    title: 'Last Name',
    example: 'Lname',
    description: 'Last name of the user/invoice recipient',
  })
  lastName: string;

  /**
   * Indicates if the user is a company
   */
  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    type: Boolean,
    title: 'Is company',
    example: false,
    default: false,
    description: 'Indicates if the user/invoice recipient is a company',
  })
  isCompany: boolean;

  /**
   * Company name of the user
   */
  @IsString()
  @MinLength(1)
  @MaxLength(250)
  @ApiProperty({
    type: String,
    title: 'Company Name',
    description: 'Company name of the user/invoice recipient',
  })
  companyName?: string;

  /**
   * Telephone number of the user
   */
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber(null)
  @ApiProperty({
    type: String,
    title: 'Telephone',
    example: '+30.2100000000',
    description: 'Telephone number of the user/invoice recipient',
  })
  telephone: string;

  /**
   * Mobile number of the user
   */
  @IsOptional()
  @IsPhoneNumber(null)
  @ApiPropertyOptional({
    type: String,
    title: 'Mobile',
    example: '+30.6900000000',
    description: 'Mobile number of the user/invoice recipient',
  })
  mobile?: string;

  /**
   * Address line 1 of the user
   */
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(250)
  @ApiProperty({
    type: String,
    title: 'Address 1',
    description: 'Address line 1 of the user/invoice recipient',
  })
  address1: string;

  /**
   * Address line 2 of the user
   */
  @IsOptional()
  @MinLength(0)
  @MaxLength(250)
  @ApiPropertyOptional({
    type: String,
    title: 'Address 2',
    description: 'Address line 2 of the user/invoice recipient',
  })
  address2?: string;

  /**
   * Address line 3 of the user
   */
  @IsOptional()
  @MinLength(0)
  @MaxLength(250)
  @ApiPropertyOptional({
    type: String,
    title: 'Address 3',
    description: 'Address line 3 of the user/invoice recipient',
  })
  address3?: string;

  /**
   * Postal code of the user
   */
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(16)
  @ApiProperty({
    type: String,
    title: 'Postal Code',
    example: '545454',
    description: 'Postal code of the user/invoice recipient',
  })
  postcode: string;

  /**
   * City of the user
   */
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(250)
  @ApiProperty({
    type: String,
    title: 'City',
    description: 'City of the user/invoice recipient',
  })
  city: string;

  /**
   * Country code of the user
   */
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(CountryEnum)
  @ApiProperty({
    enum: CountryEnum,
    title: 'Country Code',
    example: 'GB',
    description: 'Country code of the user/invoice recipient',
  })
  country: CountryEnum;

  /**
   * State of the user
   */
  @IsOptional()
  @MinLength(0)
  @MaxLength(250)
  @ApiPropertyOptional({
    type: String,
    title: 'State',
    description: 'State of the user/invoice recipient',
  })
  state?: string;
}
