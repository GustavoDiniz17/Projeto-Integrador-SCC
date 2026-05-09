import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chamado, ChamadoDocument } from './entities/chamado.schema';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';
import { IaService } from '../ia/ia.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ChamadosService {
  constructor(
    @InjectModel(Chamado.name) private chamadoModel: Model<ChamadoDocument>,
    private iaService: IaService,
  ) {}

  async create(createChamadoDto: CreateChamadoDto, usuarioId: string) {
    const prioridade = this.iaService.classifyPriority(createChamadoDto.descricao);
    const codigo = `CH-${Date.now()}`;
    const novoChamado = new this.chamadoModel({
      id: uuidv4(),
      codigo,
      ...createChamadoDto,
      prioridade,
      id_usuario_solicitante: usuarioId,
    });
    return await novoChamado.save();
  }

  async findAll() {
    return await this.chamadoModel
      .find()
      .populate('status')
      .populate('solicitante')
      .populate('departamento')
      .exec();
  }

  async findOne(id: string) {
    const chamado = await this.chamadoModel
      .findOne({ id })
      .populate('status')
      .populate('solicitante')
      .populate('departamento')
      .exec();
    if (!chamado) {
      throw new NotFoundException(`Chamado com ID ${id} não encontrado`);
    }
    return chamado;
  }

  async findByUsuario(idUsuario: string) {
    return await this.chamadoModel
      .find({ id_usuario_solicitante: idUsuario })
      .populate('status')
      .populate('solicitante')
      .populate('departamento')
      .exec();
  }

  async findByDepartamento(idDepartamento: string) {
    return await this.chamadoModel
      .find({ id_departamento: idDepartamento })
      .populate('status')
      .populate('solicitante')
      .populate('departamento')
      .exec();
  }

  async update(id: string, updateChamadoDto: UpdateChamadoDto) {
    const chamado = await this.chamadoModel
      .findOneAndUpdate({ id }, updateChamadoDto, { new: true })
      .exec();
    if (!chamado) {
      throw new NotFoundException(`Chamado com ID ${id} não encontrado`);
    }
    return chamado;
  }

  async remove(id: string) {
    const result = await this.chamadoModel.deleteOne({ id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Chamado com ID ${id} não encontrado`);
    }
    return { message: 'Chamado removido com sucesso' };
  }
}
