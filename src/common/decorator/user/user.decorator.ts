import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const requestUser = ctx.switchToHttp().getRequest().user;
    return requestUser;
  },
);
