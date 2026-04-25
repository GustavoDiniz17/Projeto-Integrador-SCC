import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Cargo } from '../../cargos/entities/cargo.entity';
import { Departamento } from '../../departamentos/entities/departamento.entity';

@Entity('Usuarios')
export class Usuario {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  id: string;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255, select: false })
  senha: string;

  @ManyToOne(() => Cargo, (cargo) => cargo.usuarios, { eager: true })
  @JoinColumn({ name: 'id_cargo' })
  cargo: Cargo;

  @Column({ type: 'varchar', length: 255 })
  id_cargo: string;

  @ManyToOne(() => Departamento, (departamento) => departamento.usuarios, {
    nullable: true,
    eager: true,
  })
  @JoinColumn({ name: 'id_departamento' })
  departamento: Departamento;

  @Column({ type: 'varchar', length: 255, nullable: true })
  id_departamento: string;

  @Column({ type: 'boolean', default: true })
  ativo: boolean;
}
