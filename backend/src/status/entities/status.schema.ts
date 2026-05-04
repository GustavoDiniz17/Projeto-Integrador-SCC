import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatusDocument = Status & Document;

@Schema({ collection: 'Status' })
export class Status {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  descricao: string;

  @Prop({ default: true })
  ativo: boolean;
}

export const StatusSchema = SchemaFactory.createForClass(Status);
