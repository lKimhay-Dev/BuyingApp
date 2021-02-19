import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {

  constructor(private authService: AuthService) {}

  @Post('authenticate')
  async login(@Request() req) {
    return this.authService.validateToken(req);
  }

}
