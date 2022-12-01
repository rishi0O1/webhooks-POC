import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
    private authService: AuthService,
  ) {}
  async createOrder() {
    console.log('check12312331');
    const data = {
      message: 'order created',
      status: 'success',
    };
    const { access_token } = await this.authService.signData(data);
    console.log(access_token);
    this.httpService
      .post(this.configService.get('WEBHOOK'), { data: access_token })
      .subscribe({
        complete: () => {
          console.log('dat');
        },
      });

    return { status: 'd123123' };
  }
}
