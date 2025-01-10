/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, Body, Get, UseGuards, UseFilters, HttpCode, Request, BadRequestException, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse, refs } from '@nestjs/swagger';
import { AppService } from './app.service';
import { DynamicItemAttributeRequest, RequestDto, ValidateRequestDto } from './dtos/request.dto';
import { BooleanResponseDto, InfoResponseDto, AttributeFieldsValidationResponse, TaskResponseDto, SuccessResponseDto, ErrorResponseDto, DynamicItemAttributesResponse as DynamicAttributesResponse } from './dtos/responses.dto';
import { ApiExceptionFilter } from './exception.filter';
import { LanguageEnum } from './enums/language.enum';
import { hasAdminRights, senderIsHoster } from './auth/auth.interceptors';
import { AuthGuard } from './auth/auth.guard';
import { JwtPayloadRequest } from './dtos/jwt-payload.request';

@Controller()
@UseFilters(new ApiExceptionFilter())
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster, hasAdminRights)
@ApiBearerAuth("JWT-auth")
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
export class AppController {
  constructor(private readonly service: AppService) { }

  /**
   * @returns ProviderInfoResponseDto
   */
  @ApiTags('Provider')
  @ApiOkResponse({ type: InfoResponseDto })
  @HttpCode(200)
  @Get('info')
  async info(
    @Request() request: Request & JwtPayloadRequest,
  ): Promise<InfoResponseDto> {
    return {
      code: 200,
      message: 'Ok',
      info: {
        name: 'Dummy Product Integration',
        product_attributes: this.service.getProductAttributes(),
        productTabs: [{
          label: 'Product Tab',
          url: 'https://www.google.com',
        }],
        listActions: [{
          icon: 'icon',
          label: 'Admin Panel',
          link: 'https://www.google.com',
          popup: 'Admin Panel',
        }],
        settings: [{
          label: 'Settings',
          url: 'https://www.google.com',
        }],
        itemDataKeys: ['id', 'cpus', 'ram', 'disk', 'os', 'panel'],
        supported_languages: [LanguageEnum.EN],
        supportedActions: []
      },
    };
  }

  /**
   *
   * @param requestBody RequestDto
   * @returns Promise with ResponseDto
   */
  @ApiTags('Product')
  @ApiBody({ type: RequestDto })
  @ApiOkResponse({
    description: 'Ok',
    type: SuccessResponseDto || TaskResponseDto,
  })
  @HttpCode(201)
  @Post('create')
  async create(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto,
  ): Promise<SuccessResponseDto | TaskResponseDto | ErrorResponseDto> {
    if (requestBody.productData.id.includes('error')) {
      throw new BadRequestException(
        'Could not create product',
        JSON.stringify(requestBody),
      );
    }

    if (requestBody.productData.id.includes('task')) {
      return {
        code: 200,
        message: 'Success',
        taskId: 'taskId',
      } as TaskResponseDto;
    }

    return {
      code: 201,
      message: 'Ok',
      id: "some-id",
      item_data: {
        id: 'id',
        cpus: 1,
        ram: 1,
        disk: 1,
        os: 'os',
        panel: 'panel',
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with ResponseDto
   */
  @ApiTags('Product')
  @Post('renew')
  @ApiOkResponse({
    description: 'Ok',
    type: SuccessResponseDto || TaskResponseDto,
  })
  @HttpCode(200)
  async renew(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto,
  ): Promise<BooleanResponseDto | TaskResponseDto> {
    if (requestBody.productData.id.includes('error')) {
      throw new BadRequestException(
        'Could not create product',
        JSON.stringify(requestBody),
      );
    }

    if (requestBody.productData.id.includes('task')) {
      return {
        code: 200,
        message: 'Success',
        taskId: 'taskId',
      } as TaskResponseDto;
    }

    return {
      code: 201,
      message: 'Ok',
      result: true
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with ResponseDto
   */
  @ApiTags('Product')
  @Post('upgrade')
  @ApiOkResponse({
    description: 'Ok',
    type: SuccessResponseDto || TaskResponseDto,
  })
  @HttpCode(200)
  async upgrade(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto,
  ): Promise<SuccessResponseDto | TaskResponseDto> {
    if (requestBody.productData.id.includes('error')) {
      throw new BadRequestException(
        'Could not create product',
        JSON.stringify(requestBody),
      );
    }

    if (requestBody.productData.id.includes('task')) {
      return {
        code: 200,
        message: 'Success',
        taskId: 'taskId',
      } as TaskResponseDto;
    }

    return {
      code: 201,
      message: 'Ok',
      id: "some-id",
      item_data: {
        id: 'id',
        cpus: 1,
        ram: 1,
        disk: 1,
        os: 'os',
        panel: 'panel',
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with ResponseDto
   */
  @ApiTags('Product')
  @Post('downgrade')
  @ApiOkResponse({
    description: 'Ok',
    type: SuccessResponseDto || TaskResponseDto,
  })
  @HttpCode(200)
  async downgrade(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto,
  ): Promise<SuccessResponseDto | TaskResponseDto> {
    if (requestBody.productData.id.includes('error')) {
      throw new BadRequestException(
        'Could not create product',
        JSON.stringify(requestBody),
      );
    }

    if (requestBody.productData.id.includes('task')) {
      return {
        code: 200,
        message: 'Success',
        taskId: 'taskId',
      } as TaskResponseDto;
    }

    return {
      code: 201,
      message: 'Ok',
      id: "some-id",
      item_data: {
        id: 'id',
        cpus: 1,
        ram: 1,
        disk: 1,
        os: 'os',
        panel: 'panel',
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with ResponseDto
   */
  @ApiTags('Product')
  @ApiOkResponse({
    description: 'Ok',
    type: BooleanResponseDto || TaskResponseDto,
  })
  @HttpCode(200)
  @Post('suspend')
  async suspend(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto,
  ): Promise<BooleanResponseDto | TaskResponseDto> {
    if (requestBody.productData.id.includes('error')) {
      throw new BadRequestException(
        'Could not create product',
        JSON.stringify(requestBody),
      );
    }

    if (requestBody.productData.id.includes('task')) {
      return {
        code: 200,
        message: 'Success',
        taskId: 'taskId',
      } as TaskResponseDto;
    }

    return {
      code: 201,
      message: 'Ok',
      result: true
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with ResponseDto
   */
  @ApiTags('Product')
  @ApiOkResponse({
    description: 'Ok',
    type: BooleanResponseDto || TaskResponseDto,
  })
  @HttpCode(200)
  @Post('unsuspend')
  async unsuspend(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto,
  ): Promise<BooleanResponseDto | TaskResponseDto> {
    if (requestBody.productData.id.includes('error')) {
      throw new BadRequestException(
        'Could not create product',
        JSON.stringify(requestBody),
      );
    }

    if (requestBody.productData.id.includes('task')) {
      return {
        code: 200,
        message: 'Success',
        taskId: 'taskId',
      } as TaskResponseDto;
    }

    return {
      code: 201,
      message: 'Ok',
      result: true
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise boolean
   */
  @ApiTags('Product')
  @Post('upgradeable')
  @ApiOkResponse({ description: 'Ok', type: BooleanResponseDto })
  @HttpCode(200)
  async upgradeable(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto,
  ): Promise<BooleanResponseDto> {
    return {
      code: 200,
      message: 'Ok',
      result: true,
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise boolean
   */
  @ApiTags('Product')
  @Post('downgradeable')
  @ApiOkResponse({ description: 'Ok', type: BooleanResponseDto })
  @HttpCode(200)
  async downgradeable(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto,
  ): Promise<BooleanResponseDto> {
    return {
      code: 200,
      message: 'Ok',
      result: true,
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise boolean
   */
  @ApiTags('Product')
  @Post('delete')
  @ApiOkResponse({
    description: 'Ok',
    type: BooleanResponseDto || TaskResponseDto,
  })
  @HttpCode(200)
  async delete(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestDto,
  ): Promise<BooleanResponseDto | TaskResponseDto> {
    if (requestBody.productData.id.includes('error')) {
      throw new BadRequestException(
        'Could not create product',
        JSON.stringify(requestBody),
      );
    }

    if (requestBody.productData.id.includes('task')) {
      return {
        code: 200,
        message: 'Success',
        taskId: 'taskId',
      } as TaskResponseDto;
    }

    return {
      code: 201,
      message: 'Ok',
      result: true,
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise boolean
   */
  @ApiTags('Product')
  @ApiBody({ type: "object" })
  @Post('validate/product-attributes')
  @ApiOkResponse()
  @HttpCode(200)
  async validateProductAttributes(
    // TODO add product to validate
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ValidateRequestDto
  ): Promise<AttributeFieldsValidationResponse> {
    const osActionField = this.service.getProductAttributesById('os');
    const panelActionField = this.service.getProductAttributesById('panel');

    // If os is null, disable panel
    if (requestBody['os'] === null) {
      panelActionField.value = null;
      panelActionField.disabled = true;
    }

    // if os is ubuntu, panel values are plesk, cpanel
    if (requestBody['os'] === 'ubuntu') {
      panelActionField.value = {
        plesk: 'Plesk',
        cpanel: 'cPanel',
      };
      panelActionField.disabled = false;
    }

    // if os is fedora panel value is plesk
    if (requestBody['os'] === 'fedora') {
      panelActionField.value = {
        plesk: 'Plesk',
      };
      panelActionField.disabled = false;
    }

    return {
      code: 200,
      message: 'Ok',
      product_attributes: [osActionField, panelActionField],
    };
  }

  /**
 *
 * @param requestBody
 * @returns Promise boolean
 */
  @ApiTags('Product')
  @ApiOkResponse({
    type: AttributeFieldsValidationResponse
  })
  @ApiBody({ type: "object" })
  @Post('validate/item-attributes')
  @ApiOkResponse()
  @HttpCode(200)
  async validateItemAttributes(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { [key: string]: string },
  ): Promise<AttributeFieldsValidationResponse> {
    const testAttribute = this.service.getItemAttributesById('test');

    return {
      code: 200,
      message: 'Ok',
      item_attributes: [testAttribute],
    };
  }

  @ApiTags("Product")
  @ApiOperation({
    summary: "Return the addons of a specific product",
    description:
      "Receive the id of the addon to be returned and the Product Attributes, and send back the addons of the Product.",
  })
  @ApiOkResponse({
    schema: { oneOf: refs(BooleanResponseDto, DynamicAttributesResponse, ErrorResponseDto) },
  })
  @Post("dynamic-attribute")
  @HttpCode(200)
  async returnAttributes(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: DynamicItemAttributeRequest
  ): Promise<DynamicAttributesResponse | BooleanResponseDto | ErrorResponseDto> {
    const fieldId: string = requestBody.attributeToBeReturned;
    const product_attributes: Record<string, any> =
      requestBody.product_attributes;


    return {
      code: 200,
      message: "Ok",
      result: true
    };
  }


  @ApiTags('Provider')
  @ApiOperation({ summary: "Install the provider to the Hoster." })
  @Post('install')
  @ApiOkResponse()
  @HttpCode(200)
  @ApiBody({ type: "object" })
  async install(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: any,
  ): Promise<TaskResponseDto | BooleanResponseDto> {
    if (requestBody.productData.id.includes('error')) {
      throw new BadRequestException(
        'Could not create product',
        JSON.stringify(request),
      );
    }

    if (requestBody.productData.id.includes('task')) {
      return {
        code: 200,
        message: 'Success',
        taskId: 'taskId',
      } as TaskResponseDto;
    }

    return {
      code: 201,
      message: 'Ok',
      result: true
    };
  }

  @ApiTags('Provider')
  @ApiOperation({ summary: "Uninstall the provider from the Hoster." })
  @Post('uninstall')
  @ApiOkResponse()
  @HttpCode(200)
  @ApiBody({ type: "object" })
  async uninstall(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: any
  ): Promise<TaskResponseDto | BooleanResponseDto> {
    if (requestBody.productData.id.includes('error')) {
      throw new BadRequestException(
        'Could not create product',
        JSON.stringify(requestBody),
      );
    }

    if (requestBody.productData.id.includes('task')) {
      return {
        code: 200,
        message: 'Success',
        taskId: 'taskId',
      } as TaskResponseDto;
    }

    return {
      code: 201,
      message: 'Ok',
      result: true
    };
  }

  @ApiTags('Provider')
  @Get('setup-status')
  @ApiOkResponse()
  @HttpCode(200)
  async setupStatus(
  ): Promise<any> {
    // The possible statuses:
    // - 'success': Indicates the setup was completed successfully.
    // - 'failure': Indicates the setup failed due to an error. (example: credentials given are wrong).
    // - 'pending': Indicates the setup is currently in progress.
    // if your integration has no need for additional setup besides install, then this endpoint need not be implemented.
    const statuses = ['success', 'failure', 'pending'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    return {
      code: 200,
      status: randomStatus,
      message:
        randomStatus === 'success'
          ? 'Setup completed successfully'
          : randomStatus === 'failure'
            ? 'Setup failed due to a random error'
            : 'Setup is currently pending',
    };
  }

}
