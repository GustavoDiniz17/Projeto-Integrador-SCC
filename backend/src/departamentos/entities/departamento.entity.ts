import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('Departamentos')
export class Departamento {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  id: string;

  @Column({ type: 'varchar', length: 255 })
  descricao: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  abreviacao: string;

  @Column({ type: 'boolean', default: true })
  ativo: boolean;

  @OneToMany(() => Usuario, (usuario) => usuario.departamento, { cascade: true })
  usuarios: Usuario[];
}
