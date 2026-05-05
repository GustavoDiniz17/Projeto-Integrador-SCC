import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Usuario, UsuarioDocument } from './entities/usuario.schema';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

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

  async create(createUsuarioDto: CreateUsuarioDto) {
    const { email, senha } = createUsuarioDto;
    
    const usuarioExistente = await this.usuarioModel.findOne({ email }).exec();
    if (usuarioExistente) {
      throw new ConflictException('E-mail já cadastrado');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(senha, salt);

    const novoUsuario = new this.usuarioModel({
      ...createUsuarioDto,
      senha: hashedPassword,
    });

    return await novoUsuario.save();
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    if (updateUsuarioDto.senha) {
      const salt = await bcrypt.genSalt();
      updateUsuarioDto.senha = await bcrypt.hash(updateUsuarioDto.senha, salt);
    }

    const usuario = await this.usuarioModel
      .findOneAndUpdate({ id }, updateUsuarioDto, { new: true })
      .exec();

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return usuario;
  }

  async remove(id: string) {
    const result = await this.usuarioModel.deleteOne({ id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    return { message: 'Usuário removido com sucesso' };
  }
}
