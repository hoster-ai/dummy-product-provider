import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { ActionFieldDto } from './action-field.dto';

/**
 * Represents the dynamic price information.
 * 
 * @class DynamicPriceInfoDto
 * 
 * @property {string} key - The key for the dynamic price information.
 * @property {number} fetchChargesInterval - The interval in minutes to fetch charges.
 * @property {string} description - The description of the dynamic price information.
 */
export class DynamicPriceInfoDto {
  /**
   * The key for the dynamic price information.
   */
  @ApiResponseProperty({ type: String, example: 'cpu' })
  @ApiProperty({
    description: 'The key for the dynamic price information.',
  })
  key: string;

  /**
   * The interval in minutes to fetch charges.
   */
  @ApiResponseProperty({ type: Number, example: 5 })
  @ApiProperty({
    description: 'The interval in minutes to fetch charges.',
  })
  fetchChargesInterval: number; //in minutes

  /**
   * The description of the dynamic price information.
   */
  @ApiResponseProperty({ type: String, example: 'per core' })
  @ApiProperty({
    description: 'The description of the dynamic price information.',
  })
  description: string;
}

class ListActionDto {
  /**
   * The icon of the list action.
   */
  @ApiResponseProperty({ type: String })
  @ApiProperty({
    description: 'The icon of the list action.',
  })
  icon: string;

  /**
   * The label of the list action (optional).
   */
  @ApiResponseProperty({ type: String })
  @ApiProperty({
    description: 'The label of the list action (optional).',
  })
  label?: string;

  /**
   * The popup content of the list action (optional).
   */
  @ApiResponseProperty({ type: String })
  @ApiProperty({
    description: 'The popup content of the list action (optional).',
  })
  popup?: string;

  /**
   * The link of the list action.
   */
  @ApiResponseProperty({ type: String })
  @ApiProperty({
    description: 'The link of the list action.',
  })
  link: string;
}

class TabDto {
  /**
   * The label of the tab.
   */
  @ApiResponseProperty({ type: String })
  @ApiProperty({
    description: 'The label of the tab.',
  })
  label: string;

  /**
   * The URL of the tab that will open in an iframe on hoster.ai.
   */
  @ApiResponseProperty({ type: String })
  @ApiProperty({
    description: 'The URL of the tab that will open in an iframe on hoster.ai.',
  })
  url: string;
}

class MenuItemDto extends TabDto {
  /**
   * The icon of the menu item.
   */
  @ApiResponseProperty({ type: String })
  @ApiProperty({
    description: 'The icon of the menu item.',
  })
  icon: string;
}

/**
 * Data Transfer Object (DTO) representing provider information.
 */
export class ProviderInfoDto {

  /**
   * The name of the provider.
   */
  @ApiResponseProperty({ type: String })
  @ApiProperty({
    description: 'The name of the provider.',
  })
  name: string;

  /**
   * The logo of the provider (optional).
   */
  @ApiResponseProperty({ type: String })
  @ApiProperty({
    description: 'The logo of the provider (optional).',
  })
  logo?: string;

  /**
   * The title of the provider (optional).
   */
  @ApiResponseProperty({ type: String })
  @ApiProperty({
    description: 'The title of the provider (optional).',
  })
  title?: string;

  /**
   * The description of the provider (optional).
   */
  @ApiResponseProperty({ type: String })
  @ApiProperty({
    description: 'The description of the provider (optional).',
  })
  description?: string;

  /**
   * The action fields associated with the provider (optional).
   */
  @ApiResponseProperty({ type: [ActionFieldDto] })
  @ApiProperty({
    description: 'The action fields associated with the provider (optional).',
  })
  actionFields?: ActionFieldDto[];

  /**
   * The product tabs associated with the provider (optional).
   * The tabs appear in the product details (e.g., VM, Storage, etc.)
   * and the URL of the tab will be rendered inside an iframe.
   */
  @ApiResponseProperty({ type: [TabDto] })
  @ApiProperty({
    description: `The product tabs associated with the provider (optional).\n
    The tabs appear in the product details (e.g., VM, Storage, etc.)\n
    and the URL of the tab will be rendered inside an iframe.`,
  })
  productTabs?: TabDto[];

  /**
   * The list actions associated with the provider (optional).
   */
  @ApiResponseProperty({ type: [ListActionDto] })
  @ApiProperty({
    description: 'The list actions associated with the provider (optional).',
  })
  listActions?: ListActionDto[];

  /**
   * The settings tabs associated with the provider (optional).
   * The tabs appear in the settings page and the URL of the tab will be rendered inside an iframe.
   */
  @ApiResponseProperty({ type: [TabDto] })
  @ApiProperty({
    description: `The settings tabs associated with the provider (optional).\n
    The tabs appear in the settings page and the URL of the tab will be rendered inside an iframe.`,
  })
  settings?: TabDto[];

  /**
   * The menu items associated with the provider (optional).
   * The menu items appear in the side menu and the URL of the menu item will be rendered inside an iframe.
   */
  @ApiResponseProperty({ type: [MenuItemDto] })
  @ApiProperty({
    description: `The menu items associated with the provider (optional).\n
    The menu items appear in the side menu and the URL of the menu item will be rendered inside an iframe.`,
  })
  menuItems?: MenuItemDto[];

  /**
   * The required fields for the provider (optional).
   */
  @ApiResponseProperty()
  @ApiProperty({
    description: 'The required fields for the provider (optional).',
  })
  requiredFields?: string[];

  /**
   * The keys of the meta fields that should be returned in the "create" action (optional).
   */
  @ApiResponseProperty()
  @ApiProperty({
    description: 'The keys of the meta fields that should be returned in the "create" action (optional).',
  })
  returnMetaKeys?: string[];
}
