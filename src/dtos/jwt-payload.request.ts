import { IsObject } from "class-validator";
import { RolesEnum } from "src/enums/roles.enum";

export class JwtPayloadRequest {
  @IsObject()
  user: {
    user_id: string;
    company_id: string;
    admin_rights: boolean;
    sender?: string;
    acceptedRoles: RolesEnum[];
  };
}