import { Injectable } from '@nestjs/common';
import { FieldDto } from './dtos/action-field.dto';
import { LabelTypeEnum } from './enums/label.type.enum';

@Injectable()
export class AppService {
  private actionFields: FieldDto[] = [
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

  public getActionFieldById(id: string): FieldDto {
    return this.actionFields.find((field: FieldDto) => field.id === id);
  }

  public getActionFields(): FieldDto[] {
    return this.actionFields;
  }
}
