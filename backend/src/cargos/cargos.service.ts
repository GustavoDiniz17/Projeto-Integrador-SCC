import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cargo, CargoDocument } from './entities/cargo.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CargosService {
  constructor(
    @InjectModel(Cargo.name) private cargoModel: Model<CargoDocument>,
  ) {}

  async create(createDto: any) {
    const novo = new this.cargoModel({
      id: uuidv4(),
      ...createDto,
    });
    return await novo.save();
  }

  async findAll() {
    return await this.cargoModel.find().exec();
  }

  async findOne(id: string) {
    const cargo = await this.cargoModel.findOne({ id }).exec();
    if (!cargo) {
      throw new NotFoundException(`Cargo com ID ${id} não encontrado`);
    }
    return cargo;
  }

  async findByNivelAcesso(nivelAcesso: string) {
    return await this.cargoModel.find({ nivel_acesso: nivelAcesso }).exec();
  }

  async update(id: string, updateDto: any) {
    const cargo = await this.cargoModel
      .findOneAndUpdate({ id }, updateDto, { new: true })
      .exec();
    if (!cargo) {
      throw new NotFoundException(`Cargo com ID ${id} não encontrado`);
    }
    return cargo;
  }

  async remove(id: string) {
    const result = await this.cargoModel.deleteOne({ id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Cargo com ID ${id} não encontrado`);
    }
    return { message: 'Cargo removido com sucesso' };
  }
}
