import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @Get()
getStatus() {
  return {
    name: 'Agent Pro API',
    status: 'running',
    version: '1.0.0',
  };
}
