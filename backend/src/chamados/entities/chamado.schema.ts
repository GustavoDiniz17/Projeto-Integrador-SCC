import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Status } from '../../status/entities/status.schema';
import { Usuario } from '../../usuarios/entities/usuario.schema';
import { Departamento } from '../../departamentos/entities/departamento.schema';

export type ChamadoDocument = Chamado & Document;

@Schema({ collection: 'Chamados', timestamps: { createdAt: 'data_abertura', updatedAt: 'data_atualizacao' } })
export class Chamado {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true, unique: true })
  codigo: string;

  @Prop({ required: true })
  assunto: string;

  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  prioridade: string;

  @Prop({ type: String, ref: 'Status', required: true })
  id_status: string;

  @Prop({ type: String, ref: 'Usuario', required: true })
  id_usuario_solicitante: string;

  @Prop({ type: String, ref: 'Departamento', required: true })
  id_departamento: string;

  // Campos para população
  status?: Status;
  solicitante?: Usuario;
  departamento?: Departamento;
}

export const ChamadoSchema = SchemaFactory.createForClass(Chamado);
