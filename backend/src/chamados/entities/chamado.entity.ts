import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Status } from '../../status/entities/status.entity';
import { Departamento } from '../../departamentos/entities/departamento.entity';

@Entity('Chamados')
export class Chamado {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  codigo: string;

  @Column({ type: 'varchar', length: 255 })
  assunto: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ type: 'varchar', length: 50 })
  prioridade: string; // Classificada pela IA

  @ManyToOne(() => Status, { eager: true })
  @JoinColumn({ name: 'id_status' })
  status: Status;

  @Column({ type: 'varchar', length: 255 })
  id_status: string;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'id_usuario_solicitante' })
  solicitante: Usuario;

  @Column({ type: 'varchar', length: 255 })
  id_usuario_solicitante: string;

  @ManyToOne(() => Departamento, { eager: true })
  @JoinColumn({ name: 'id_departamento' })
  departamento: Departamento;

  @Column({ type: 'varchar', length: 255 })
  id_departamento: string;

  @CreateDateColumn()
  data_abertura: Date;

  @UpdateDateColumn()
  data_atualizacao: Date;
}
