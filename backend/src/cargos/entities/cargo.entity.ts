import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('Cargos')
export class Cargo {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  id: string;

  @Column({ type: 'varchar', length: 255 })
  descricao: string;

  @Column({ type: 'varchar', length: 255 })
  nivel_acesso: string;

  @OneToMany(() => Usuario, (usuario) => usuario.cargo, { cascade: true })
  usuarios: Usuario[];
}
