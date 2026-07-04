import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return {
      name: 'Agent Pro API',
      status: 'running',
      version: '1.0.0',
    };
  }
}
