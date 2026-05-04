import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartamentosService } from './departamentos.service';
import { DepartamentosController } from './departamentos.controller';
import { Departamento, DepartamentoSchema } from './entities/departamento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Departamento.name, schema: DepartamentoSchema }]),
  ],
  controllers: [DepartamentosController],
  providers: [DepartamentosService],
  exports: [DepartamentosService],
})
export class DepartamentosModule {}
