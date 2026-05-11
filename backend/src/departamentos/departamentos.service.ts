import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Departamento, DepartamentoDocument } from './entities/departamento.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DepartamentosService {
  constructor(
    @InjectModel(Departamento.name) private departamentoModel: Model<DepartamentoDocument>,
  ) {}

  async create(createDto: any) {
    const novo = new this.departamentoModel({
      id: uuidv4(),
      ...createDto,
      ativo: createDto.ativo !== undefined ? createDto.ativo : true,
    });
    return await novo.save();
  }

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

  async update(id: string, updateDto: any) {
    const departamento = await this.departamentoModel
      .findOneAndUpdate({ id }, updateDto, { new: true })
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
