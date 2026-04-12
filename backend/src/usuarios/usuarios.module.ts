import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './entities/usuario.entity';
import { Cargo } from '../cargos/entities/cargo.entity';
import { Departamento } from '../departamentos/entities/departamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Cargo, Departamento])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
