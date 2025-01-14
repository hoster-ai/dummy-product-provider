import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    ForbiddenException,
  } from "@nestjs/common";
  import { Observable } from "rxjs";
  import { JwtPayloadRequest } from "src/dtos/jwt-payload.request";
import { SenderEnum } from "src/enums/sender.enum";

@Injectable()
export class senderIs implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request & JwtPayloadRequest = context.switchToHttp().getRequest();
    const { sender, company_id, user_id } = request.user;

    switch (sender) {
      case SenderEnum.COMPANY:
        this.validateCompany(company_id);
        break;

      case SenderEnum.USER:
        this.validateUser(company_id, user_id);
        break;

      default:
        this.throwInvalidSender();
    }

    return next.handle();
  }

  private validateCompany(company_id?: string): void {
    if (!company_id) {
      throw new ForbiddenException('Company sender must have a company_id');
    }
  }

  private validateUser(company_id?: string, user_id?: string): void {
    if (!company_id || !user_id) {
      throw new ForbiddenException('User sender must have both company_id and user_id');
    }
  }

  private throwInvalidSender(): void {
    throw new ForbiddenException('Invalid sender. Access is denied.');
  }
}
  
  // @Injectable()
  // export class hasAdminRights implements NestInterceptor {
  //   //check the access level of the sender
  //   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
  //     const request: Request & JwtPayloadRequest = context
  //       .switchToHttp()
  //       .getRequest();
  
  //     if (!request.user.admin_rights) {
  //       throw new ForbiddenException("Forbidden");
  //     }
  
  //     return next.handle();
  //   }
  // }