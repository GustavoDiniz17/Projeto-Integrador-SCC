import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from './entities/cargo.entity';

@Injectable()
export class CargosService {
  constructor(
    @InjectRepository(Cargo)
    private cargoRepository: Repository<Cargo>,
  ) {}

  async findAll() {
    return await this.cargoRepository.find();
  }

  async findOne(id: string) {
    return await this.cargoRepository.findOneBy({ id });
  }

  async findByNivelAcesso(nivelAcesso: string) {
    return await this.cargoRepository.findBy({ nivel_acesso: nivelAcesso });
  }
}
