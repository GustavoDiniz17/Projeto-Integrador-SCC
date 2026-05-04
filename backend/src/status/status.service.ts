import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Status, StatusDocument } from './entities/status.schema';

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status.name) private statusModel: Model<StatusDocument>,
  ) {}

  async findAll() {
    return await this.statusModel.find().exec();
  }

  async findOne(id: string) {
    const status = await this.statusModel.findOne({ id }).exec();
    if (!status) {
      throw new NotFoundException(`Status com ID ${id} não encontrado`);
    }
    return status;
  }

  async findAllActive() {
    return await this.statusModel.find({ ativo: true }).exec();
  }
}
