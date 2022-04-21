/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  UseFilters,
  HttpCode,
  Request,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { RequestDto } from './dtos/data.request.dto';
import {
  MetaResponseDto,
  BooleanResponseDto,
  InfoResponseDto,
  ActionFieldsValidationResponse,
  TaskResponseDto,
} from './dtos/responses.dto';
import { ApiExceptionFilter } from './exception.filter';

@Controller()
@ApiTags('product-provider')
@UseFilters(new ApiExceptionFilter())
@UseGuards(AuthGuard('bearer'))
@ApiBearerAuth()
@ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized' })
export class AppController {
  constructor(private readonly service: AppService) {}

  /**
   * @returns ProviderInfoResponseDto
   */
  @ApiOkResponse({ type: InfoResponseDto })
  @HttpCode(200)
  @Get('info')
  async info(): Promise<InfoResponseDto> {
    return {
      code: 200,
      message: 'Ok',
      info: {
        name: '',
        actionFields: this.service.getActionFields(),
        productTabs: [],
        listActions: [],
        settings: [],
        returnMetaKeys: [],
      },
    };
  }

  /**
   *
   * @param requestBody RequestDto
   * @returns Promise with ResponseDto
   */
  @ApiBody({ type: RequestDto })
  @HttpCode(201)
  @Post('create')
  async create(
    @Body() requestBody: RequestDto,
  ): Promise<MetaResponseDto | TaskResponseDto> {
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
      meta: {
        private: null,
        public: null,
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with ResponseDto
   */
  @Post('renew')
  @ApiOkResponse({
    description: 'Ok',
    type: MetaResponseDto || TaskResponseDto,
  })
  @HttpCode(200)
  async renew(
    @Body() requestBody: RequestDto,
  ): Promise<MetaResponseDto | TaskResponseDto> {
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
      meta: {
        private: null,
        public: null,
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with ResponseDto
   */
  @Post('upgrade')
  @ApiOkResponse({
    description: 'Ok',
    type: MetaResponseDto || TaskResponseDto,
  })
  @HttpCode(200)
  async upgrade(
    @Body() requestBody: RequestDto,
  ): Promise<MetaResponseDto | TaskResponseDto> {
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
      meta: {
        private: null,
        public: null,
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with ResponseDto
   */
  @Post('downgrade')
  @ApiOkResponse({
    description: 'Ok',
    type: MetaResponseDto || TaskResponseDto,
  })
  @HttpCode(200)
  async downgrade(
    @Body() requestBody: RequestDto,
  ): Promise<MetaResponseDto | TaskResponseDto> {
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
      meta: {
        private: null,
        public: null,
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with ResponseDto
   */
  @ApiOkResponse({
    description: 'Ok',
    type: MetaResponseDto || TaskResponseDto,
  })
  @HttpCode(200)
  @Post('suspend')
  async suspend(
    @Body() requestBody: RequestDto,
  ): Promise<MetaResponseDto | TaskResponseDto> {
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
      meta: {
        private: null,
        public: null,
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise with ResponseDto
   */
  @ApiOkResponse({
    description: 'Ok',
    type: MetaResponseDto || TaskResponseDto,
  })
  @HttpCode(200)
  @Post('unsuspend')
  async unsuspend(
    @Body() requestBody: RequestDto,
  ): Promise<MetaResponseDto | TaskResponseDto> {
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
      meta: {
        private: null,
        public: null,
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise boolean
   */
  @Post('upgradeable')
  @ApiOkResponse({ description: 'Ok', type: BooleanResponseDto })
  @HttpCode(200)
  async upgradeable(
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
  @Post('downgradeable')
  @ApiOkResponse({ description: 'Ok', type: BooleanResponseDto })
  @HttpCode(200)
  async downgradeable(
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
  @Post('delete')
  @ApiOkResponse({
    description: 'Ok',
    type: MetaResponseDto || TaskResponseDto,
  })
  @HttpCode(200)
  async delete(
    @Body() requestBody: RequestDto,
  ): Promise<MetaResponseDto | TaskResponseDto> {
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
      meta: {
        private: null,
        public: null,
      },
    };
  }

  /**
   *
   * @param requestBody
   * @returns Promise boolean
   */
  @ApiBody({ type: Object })
  @Post('validate/action-fields')
  @ApiOkResponse()
  @HttpCode(200)
  async validateActionFields(
    @Body() requestBody: { [key: string]: string },
  ): Promise<ActionFieldsValidationResponse> {
    const osActionField = this.service.getActionFieldById('os');
    const panelActionField = this.service.getActionFieldById('panel');

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
      actionFields: [osActionField, panelActionField],
    };
  }

  @Post('install')
  @ApiOkResponse()
  @HttpCode(200)
  @ApiBody({ type: Object })
  async install(
    @Request() requestBody: any,
  ): Promise<TaskResponseDto | MetaResponseDto> {
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
      meta: {
        private: null,
        public: null,
      },
    };
  }

  @Post('uninstall')
  @ApiOkResponse()
  @HttpCode(200)
  @ApiBody({ type: Object })
  async uninstall(
    @Request() requestBody: any,
  ): Promise<TaskResponseDto | MetaResponseDto> {
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
      meta: {
        private: null,
        public: null,
      },
    };
  }
}
