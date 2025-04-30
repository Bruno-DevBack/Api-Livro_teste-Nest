import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('livro')// nome da tabela no banco de dados
export class Livro {
@PrimaryGeneratedColumn()
id: number;
@Column()
titulo: string;
@Column()
autor: string;
@Column()
genero: string;
}