import { Injectable, Optional, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  // 생성자 주입
  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}

  // 속성 기반 주입
  // @Inject('HTTP_OPTIONS')
  // private readonly httpClient: T;
}
