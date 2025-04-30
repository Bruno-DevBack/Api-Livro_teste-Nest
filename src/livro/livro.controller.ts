import { Controller, Get } from '@nestjs/common';
import { LivroService } from './livro.service';
@Controller('livro')
export class LivroController {
 constructor(private readonly livroService: LivroService) {}
 @Get()
 findAll() {
 return this.livroService.findAll();
 }
}
