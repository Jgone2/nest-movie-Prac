import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './application/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
