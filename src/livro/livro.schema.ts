import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LivroDocument = Livro & Document;

@Schema()
export class Livro {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  autor: string;

  @Prop({ required: true })
  genero: string;
}

export const LivroSchema = SchemaFactory.createForClass(Livro); 