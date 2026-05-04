import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DepartamentoDocument = Departamento & Document;

@Schema({ collection: 'Departamentos' })
export class Departamento {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  descricao: string;

  @Prop()
  abreviacao: string;

  @Prop({ default: true })
  ativo: boolean;
}

export const DepartamentoSchema = SchemaFactory.createForClass(Departamento);
