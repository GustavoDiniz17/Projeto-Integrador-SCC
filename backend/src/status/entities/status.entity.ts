import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('Status')
export class Status {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  id: string;

  @Column({ type: 'varchar', length: 255 })
  descricao: string;

  @Column({ type: 'boolean', default: true })
  ativo: boolean;
}
