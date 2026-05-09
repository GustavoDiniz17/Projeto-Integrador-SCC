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

  async create(createDepartamentoDto: any) {
    const novo = new this.departamentoModel(createDepartamentoDto);
    return await novo.save();
  }

  async update(id: string, updateDepartamentoDto: any) {
    const departamento = await this.departamentoModel
      .findOneAndUpdate({ id }, updateDepartamentoDto, { new: true })
      .exec();
    if (!departamento) {
      throw new NotFoundException(`Departamento com ID ${id} não encontrado`);
    }
    return departamento;
  }

  async remove(id: string) {
    const result = await this.departamentoModel.deleteOne({ id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Departamento com ID ${id} não encontrado`);
    }
    return { message: 'Departamento removido com sucesso' };
  }
}
