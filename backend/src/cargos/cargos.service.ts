import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cargo, CargoDocument } from './entities/cargo.schema';

@Injectable()
export class CargosService {
  constructor(
    @InjectModel(Cargo.name) private cargoModel: Model<CargoDocument>,
  ) {}

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
}
