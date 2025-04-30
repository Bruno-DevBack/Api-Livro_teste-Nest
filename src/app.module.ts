import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livro } from './livro/livro.entity';
import { LivroModule } from './livro/livro.module';
@Module({
imports: [
TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: '',
database: 'biblio',
entities: [Livro],
synchronize: true,
}),
LivroModule,
],
})
export class AppModule {}