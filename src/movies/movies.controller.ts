import {
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
  Patch,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './persistence/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/search')
  search(@Query('year', ParseIntPipe) madeYear: string) {
    return `This will search for a movie with made year: ${madeYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number) {
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  }

  @Put('/:id')
  update(@Param('id') movieId: string, @Body() updateData: UpdateMovieDto) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.patchUpdate(movieId, updateData);
  }

  @Delete('/:id')
  delete(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }
}
