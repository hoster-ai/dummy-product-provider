import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { BearerStrategy } from './bearer.strategy';
import { AuthGuard } from './auth.guard';
import { JwtModule, JwtService } from '@nestjs/jwt';
@Module({
  imports: [PassportModule, JwtModule],
  controllers: [],
  providers: [BearerStrategy, AuthGuard, JwtService],
  exports: [BearerStrategy, AuthGuard,JwtService],
})
export class AuthModule { }
