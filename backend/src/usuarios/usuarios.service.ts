import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from './entities/usuario.schema';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
  ) {}

  async findAll() {
    return await this.usuarioModel
      .find()
      .populate('id_cargo')
      .populate('id_departamento')
      .exec();
  }

  async findOne(id: string) {
    const usuario = await this.usuarioModel
      .findOne({ id })
      .populate('id_cargo')
      .populate('id_departamento')
      .exec();

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    return usuario;
  }

  async findByEmail(email: string) {
    return await this.usuarioModel
      .findOne({ email })
      .select('+senha')
      .populate('id_cargo')
      .populate('id_departamento')
      .exec();
  }

  async findByDepartamento(idDepartamento: string) {
    return await this.usuarioModel
      .find({ id_departamento: idDepartamento })
      .populate('id_cargo')
      .populate('id_departamento')
      .exec();
  }

  async findByCargo(idCargo: string) {
    return await this.usuarioModel
      .find({ id_cargo: idCargo })
      .populate('id_cargo')
      .populate('id_departamento')
      .exec();
  }

  async findAllActive() {
    return await this.usuarioModel
      .find({ ativo: true })
      .populate('id_cargo')
      .populate('id_departamento')
      .exec();
  }
}
