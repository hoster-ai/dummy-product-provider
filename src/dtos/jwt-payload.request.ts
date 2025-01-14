import { IsObject } from "class-validator";
import { RolesEnum } from "src/enums/roles.enum";
import { SenderEnum } from "src/enums/sender.enum";

export class JwtPayloadRequest {
  @IsObject()
  user: {
    user_id?: string;
    company_id?: string;
    sender: SenderEnum;
    acceptedRoles: RolesEnum[];
  };
}