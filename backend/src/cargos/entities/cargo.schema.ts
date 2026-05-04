import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CargoDocument = Cargo & Document;

@Schema({ collection: 'Cargos' })
export class Cargo {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  nivel_acesso: string;
}

export const CargoSchema = SchemaFactory.createForClass(Cargo);
