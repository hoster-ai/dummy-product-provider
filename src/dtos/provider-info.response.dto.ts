import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { ActionFieldDto as FieldDto } from './action-field.dto';
import { LanguageEnum } from 'src/enums/language.enum';
import { EventsEnum } from 'src/enums/events.enum';
import { RolesEnum } from 'src/enums/roles.enum';
import { IntegrationActionsEnum } from 'src/enums/integrationActions.enum';

export class Unit {
  id: string;

  unit: string

  interval: number;
}

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

  @ApiResponseProperty()
  @ApiProperty({
    title: 'Supported Languages',
    description: 'List of supported languages for the integration. Deafault is the first',
    enum: LanguageEnum,
    isArray: true,
    example: [LanguageEnum.EN, LanguageEnum.ES],
    required: true,
  })
  supported_languages: LanguageEnum[];

  /**
   * The action fields associated with the provider (optional).
   */
  @ApiResponseProperty({ type: [FieldDto] })
  @ApiProperty({
    description: 'The action fields associated with the provider (optional).',
  })
  product_attributes?: FieldDto[];

  /**
 * The action fields associated with the provider (optional).
 */
  @ApiResponseProperty({ type: [FieldDto] })
  @ApiProperty({
    description: 'The action fields associated with the item (optional).',
  })
  item_attributes?: FieldDto[];

  @ApiPropertyOptional({
    title: 'Listen Events',
    description: 'An array of events this integration wishes to listen to.',
    enum: EventsEnum,
    isArray: true,
    example: [EventsEnum.ITEM_CREATED, EventsEnum.ITEM_UPDATED],
    required: false,
  })
  listen_events?: EventsEnum[];

  @ApiPropertyOptional({
    title: 'Required Roles',
    description: 'An array of roles this integration requires to have access to.',
    enum: RolesEnum,
    isArray: true,
    example: [RolesEnum.ITEMS_READ, RolesEnum.PRODUCTS_READ],
    required: false,
  })
  required_roles?: RolesEnum[];

  @ApiPropertyOptional({
    title: 'Supported Actions',
    description: 'A list of supported integration actions. Each Action is an endpoint that is implememnted in the integration. If an Action is missing, then that means it is not implemented in the integration',
    enum: IntegrationActionsEnum,
    isArray: true,
    example: [IntegrationActionsEnum.CREATE, IntegrationActionsEnum.DELETE],
    required: true,
  })
  supportedActions: IntegrationActionsEnum[];
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

  @ApiProperty({
    type: String,
    example: 'https://integration.onboarding.url',
    title: 'Onboarding URL',
    description: 'The URL for onboarding the integration.',
    required: false,
  })
  onboardingUrl?: string;

  /**
   * The required fields for the provider (optional).
   */
  @ApiResponseProperty()
  @ApiProperty({
    description: 'The required fields for the provider (optional).',
  })
  requiredFields?: string[];

  @ApiPropertyOptional({
    type: [Unit],
    title: 'Pay-Per-Use Units',
    description: 'An array of pay-per-use units associated with the integration.',
    required: false,
  })
  payPerUseUnits?: Unit[];

  /**
   * The keys of the meta fields that should be returned in the "create" action (optional).
   */
  @ApiResponseProperty()
  @ApiProperty({
    description: 'The keys of the meta fields that should be returned in the "create" action (optional).',
  })
  itemMetaKeys?: string[];
}

