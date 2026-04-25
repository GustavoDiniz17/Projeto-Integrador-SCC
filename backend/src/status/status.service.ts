import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from './entities/status.entity';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
  ) {}

  async findAll() {
    return await this.statusRepository.find();
  }

  async findOne(id: string) {
    return await this.statusRepository.findOneBy({ id });
  }

  async findAllActive() {
    return await this.statusRepository.findBy({ ativo: true });
  }
}
