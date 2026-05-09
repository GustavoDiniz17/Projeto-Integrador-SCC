import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChamadoDocument = Chamado & Document;

@Schema({ 
  collection: 'Chamados', 
  timestamps: { createdAt: 'data_abertura', updatedAt: 'data_atualizacao' },
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})
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

  @Prop({ required: true })
  id_status: string;

  @Prop({ required: true })
  id_usuario_solicitante: string;

  @Prop({ required: true })
  id_departamento: string;
}

export const ChamadoSchema = SchemaFactory.createForClass(Chamado);

ChamadoSchema.virtual('status', {
  ref: 'Status',
  localField: 'id_status',
  foreignField: 'id',
  justOne: true
});

ChamadoSchema.virtual('solicitante', {
  ref: 'Usuario',
  localField: 'id_usuario_solicitante',
  foreignField: 'id',
  justOne: true
});

ChamadoSchema.virtual('departamento', {
  ref: 'Departamento',
  localField: 'id_departamento',
  foreignField: 'id',
  justOne: true
});
