import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { LivroService } from './livro.service';
import { Livro } from './livro.schema';

@Controller('livro')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  @Get()
  findAll() {
    return this.livroService.findAll();
  }

  @Post()
  create(@Body() livro: Livro) {
    return this.livroService.create(livro);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livroService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() livro: Livro) {
    return this.livroService.update(id, livro);
  }
}
