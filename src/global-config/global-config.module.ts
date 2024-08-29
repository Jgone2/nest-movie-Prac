import { Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { RolesGuard } from '../common/guard/roles/roles.guard';
import { LoggingInterceptor } from '../common/interceptor/logging/logging.interceptor';
import { TransformInterceptor } from '../common/interceptor/transform/transform.interceptor';
import { ExcludeNullInterceptor } from '../common/interceptor/exclude-null/exclude-null.interceptor';
import { ErrorsInterceptor } from '../common/interceptor/errors/errors.interceptor';
import { CacheInterceptor } from '../common/interceptor/cache/cache.interceptor';
import { TimeoutInterceptor } from 'src/common/interceptor/timeout/timeout.interceptor';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ExcludeNullInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
  ],
})
export class GlobalConfigModule {}
