import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Livro, LivroDocument } from './livro.schema';

@Injectable()
export class LivroService {
  constructor(
    @InjectModel(Livro.name)
    private livroModel: Model<LivroDocument>,
  ) {}

  async findAll(): Promise<Livro[]> {
    return this.livroModel.find().exec();
  }

  async create(livro: Livro): Promise<Livro> {
    const novoLivro = new this.livroModel(livro);
    return novoLivro.save();
  }

  async remove(id: string): Promise<void> {
    const resultado = await this.livroModel.deleteOne({ _id: id }).exec();
    if (resultado.deletedCount === 0) {
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }
  }

  async update(id: string, livro: Livro): Promise<Livro> {
    const livroAtualizado = await this.livroModel
      .findByIdAndUpdate(id, livro, { new: true })
      .exec();
    
    if (!livroAtualizado) {
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }
    return livroAtualizado;
  }
}