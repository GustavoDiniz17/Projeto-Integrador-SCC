import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Departamento, DepartamentoDocument } from './entities/departamento.schema';

@Injectable()
export class DepartamentosService {
  constructor(
    @InjectModel(Departamento.name) private departamentoModel: Model<DepartamentoDocument>,
  ) {}

  async findAll() {
    return await this.departamentoModel.find().exec();
  }

  async findOne(id: string) {
    const departamento = await this.departamentoModel.findOne({ id }).exec();
    if (!departamento) {
      throw new NotFoundException(`Departamento com ID ${id} não encontrado`);
    }
    return departamento;
  }

  async findAllActive() {
    return await this.departamentoModel.find({ ativo: true }).exec();
  }
}
