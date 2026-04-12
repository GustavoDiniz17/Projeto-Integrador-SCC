import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamento } from './entities/departamento.entity';

@Injectable()
export class DepartamentosService {
  constructor(
    @InjectRepository(Departamento)
    private departamentoRepository: Repository<Departamento>,
  ) {}

  async findAll() {
    return await this.departamentoRepository.find();
  }

  async findOne(id: string) {
    return await this.departamentoRepository.findOneBy({ id });
  }

  async findAllActive() {
    return await this.departamentoRepository.findBy({ ativo: true });
  }
}
