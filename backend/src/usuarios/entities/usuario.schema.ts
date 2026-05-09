import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Cargo } from '../../cargos/entities/cargo.schema';
import { Departamento } from '../../departamentos/entities/departamento.schema';

export type UsuarioDocument = Usuario & Document;

@Schema({ 
  collection: 'Usuarios',
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})
export class Usuario {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  nome: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, select: false })
  senha: string;

  @Prop({ required: true })
  id_cargo: string;

  @Prop()
  id_departamento: string;

  @Prop({ default: true })
  ativo: boolean;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);

UsuarioSchema.virtual('cargo', {
  ref: 'Cargo',
  localField: 'id_cargo',
  foreignField: 'id',
  justOne: true
});

UsuarioSchema.virtual('departamento', {
  ref: 'Departamento',
  localField: 'id_departamento',
  foreignField: 'id',
  justOne: true
});
