import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LivroService } from './livro.service';
import { LivroController } from './livro.controller';
import { Livro, LivroSchema } from './livro.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Livro.name, schema: LivroSchema }])
  ],
  providers: [LivroService],
  controllers: [LivroController],
})
export class LivroModule {}