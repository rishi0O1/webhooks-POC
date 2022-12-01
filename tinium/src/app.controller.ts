import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('webhook/createOrder')
  @UseGuards(JwtAuthGuard)
  createOrder(@Body() data: string) {
    return this.appService.createOrder(data);
  }
}
