import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChamadosService } from './chamados.service';
import { ChamadosController } from './chamados.controller';
import { Chamado } from './entities/chamado.entity';
import { IaService } from '../ia/ia.service';

@Module({
  imports: [TypeOrmModule.forFeature([Chamado])],
  controllers: [ChamadosController],
  providers: [ChamadosService, IaService],
  exports: [ChamadosService],
})
export class ChamadosModule {}
