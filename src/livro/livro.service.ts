import { Injectable, NotFoundException } from '@nestjs/common';
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

 create(livro: Livro): Promise<Livro> {
 return this.livroRepository.save(livro);
 }

 async remove(id: number): Promise<void> {
 await this.livroRepository.delete(id);
 }

 async update(id: number, livro: Livro): Promise<Livro> {
 await this.livroRepository.update(id, livro);
 const updatedLivro = await this.livroRepository.findOne({ where: { id } });
 if (!updatedLivro) {
 throw new NotFoundException(`Livro com ID ${id} não encontrado`);
 }
 return updatedLivro;
 }
}