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
    //check if the sender is indeed Hoster
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const request: Request & JwtPayloadRequest = context
        .switchToHttp()
        .getRequest();
  
      const { sender, company_id, user_id } = request.user;

      // Validate based on the sender value
      if (sender === SenderEnum.COMPANY && !company_id) {
        throw new ForbiddenException('Company sender must have a company_id');
      }
  
      if (sender === SenderEnum.USER && (!company_id || !user_id)) {
        throw new ForbiddenException('User sender must have both company_id and user_id');
      }
  
      if (sender !== SenderEnum.COMPANY && sender !== SenderEnum.USER) {
        throw new ForbiddenException('Invalid sender. Access is denied.');
      }
    
      return next.handle();
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