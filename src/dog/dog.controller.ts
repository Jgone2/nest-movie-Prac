import {
  Controller,
  Post,
  Get,
  HttpStatus,
  Req,
  Res,
  HttpCode,
  Header,
  Redirect,
  Query,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('dog')
export class DogController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create() {
    return `This action adds a new dog`;
  }

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK);
    return `This action returns all dogs`;
  }

  @Get('one')
  findOne(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return 'This action returns one dog';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
