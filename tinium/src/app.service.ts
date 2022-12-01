import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createOrder(data): string {
    console.log('encryoted text');
    console.log(data);
    return data;
  }
}
