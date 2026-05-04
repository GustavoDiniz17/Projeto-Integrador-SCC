import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Cargo } from '../../cargos/entities/cargo.schema';
import { Departamento } from '../../departamentos/entities/departamento.schema';

export type UsuarioDocument = Usuario & Document;

@Schema({ collection: 'Usuarios' })
export class Usuario {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  nome: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, select: false })
  senha: string;

  @Prop({ type: String, ref: 'Cargo', required: true })
  id_cargo: string;

  @Prop({ type: String, ref: 'Departamento' })
  id_departamento: string;

  @Prop({ default: true })
  ativo: boolean;

  // Campos virtuais ou populados para manter compatibilidade com a lógica anterior
  cargo?: Cargo;
  departamento?: Departamento;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
