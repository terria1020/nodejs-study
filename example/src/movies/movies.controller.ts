import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('')
  getAll() {
    return 'hello world';
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return `one movie: ${id}`;
  }

  @Post()
  create(@Body() movieData: string) {
    console.log(movieData);
    return 'this create one movie';
  }

  @Delete('/:id')
  allDelete(@Param('id') id: string) {
    return `'movie ${id} deleted'`;
  }

  @Patch('/:id')
  patchMovieI(@Param('id') id: string) {
    return `patch: ${id} patched`;
  }
}
