import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChamadosService } from './chamados.service';
import { ChamadosController } from './chamados.controller';
import { Chamado, ChamadoSchema } from './entities/chamado.schema';
import { IAService } from '../ia/ia.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chamado.name, schema: ChamadoSchema }]),
  ],
  controllers: [ChamadosController],
  providers: [ChamadosService, IAService],
})
export class ChamadosModule {}
