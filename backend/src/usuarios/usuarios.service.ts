import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll() {
    return await this.usuarioRepository.find({
      relations: ['cargo', 'departamento'],
    });
  }

  async findOne(id: string) {
    return await this.usuarioRepository.findOne({
      where: { id },
      relations: ['cargo', 'departamento'],
    });
  }

  async findByDepartamento(idDepartamento: string) {
    return await this.usuarioRepository.find({
      where: { id_departamento: idDepartamento },
      relations: ['cargo', 'departamento'],
    });
  }

  async findByCargo(idCargo: string) {
    return await this.usuarioRepository.find({
      where: { id_cargo: idCargo },
      relations: ['cargo', 'departamento'],
    });
  }

  async findAllActive() {
    return await this.usuarioRepository.find({
      where: { ativo: true },
      relations: ['cargo', 'departamento'],
    });
  }
}
