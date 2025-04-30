import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livro } from './livro.entity';
@Injectable()
export class LivroService {
 constructor(
 @InjectRepository(Livro)
 private livroRepository: Repository<Livro>,
 ) {}
 findAll(): Promise<Livro[]> {
 return this.livroRepository.find();
 }
}