import { Injectable } from '@nestjs/common';
import { FieldDto } from './dtos/field.dto';
import { LabelTypeEnum } from './enums/label.type.enum';
import { LanguageEnum } from './enums/language.enum';

@Injectable()
export class AppService {
  private productAttributes: FieldDto[] = [
    {
      id: 'os',
      label: [{ language: LanguageEnum.EN, text: 'OS' }],
      value: {
        ubuntu: 'Ubuntu',
        fedora: 'Fedora',
      },
      type: LabelTypeEnum.SELECT,
      required: true,
      disabled: false,
      hidden: false,
      regexValidation: '',
      remoteValidation: true,
    },
    {
      id: 'panel',
      label: [{ language: LanguageEnum.EN, text: 'Panel' }],
      value: {
        plesk: 'Plesk',
        cpanel: 'cPanel',
      },
      type: LabelTypeEnum.SELECT,
      required: true,
      disabled: true,
      hidden: false,
      regexValidation: '',
      remoteValidation: true,
    },
  ];

  private itemAttributes: FieldDto[] = [
    {
      id: 'test',
      label: [{
        language: LanguageEnum.EN,
        text: 'test'
      }],
      value: { test: 'test' },
      type: LabelTypeEnum.TEXT_BOX,
      required: false,
      disabled: false,
      hidden: false
    },
  ]

  public getProductAttributesById(id: string): FieldDto {
    return this.productAttributes.find((field: FieldDto) => field.id === id);
  }

  public getProductAttributes(): FieldDto[] {
    return this.productAttributes;
  }


  public getItemAttributesById(id: string): FieldDto {
    return this.itemAttributes.find((field: FieldDto) => field.id === id);
  }

  public getItemAttributes(): FieldDto[] {
    return this.itemAttributes;
  }
}
