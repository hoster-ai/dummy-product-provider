import { Injectable } from '@nestjs/common';
import { ActionFieldDto } from './dtos/action-field.dto';
import { LabelTypeEnum } from './enums/label.type.enum';

@Injectable()
export class AppService {
  private actionFields: ActionFieldDto[] = [
    {
      id: 'os',
      label: 'OS',
      value: {
        ubuntu: 'Ubuntu',
        fedora: 'Fedora',
      },
      type: LabelTypeEnum.LIST,
      required: true,
      disabled: false,
      hidden: false,
      regexValidation: '',
      remoteValidation: true,
      error: '',
    },
    {
      id: 'panel',
      label: 'Panel',
      value: {
        plesk: 'Plesk',
        cpanel: 'cPanel',
      },
      type: LabelTypeEnum.LIST,
      required: true,
      disabled: true,
      hidden: false,
      regexValidation: '',
      remoteValidation: true,
      error: '',
    },
  ];

  public getActionFieldById(id: string): ActionFieldDto {
    return this.actionFields.find((field: ActionFieldDto) => field.id === id);
  }

  public getActionFields(): ActionFieldDto[] {
    return this.actionFields;
  }
}
