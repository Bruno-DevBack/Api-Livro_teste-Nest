import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LivroModule } from './livro/livro.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/biblioteca'),
    LivroModule,
  ],
})
export class AppModule {}