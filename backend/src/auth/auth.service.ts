import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from '../usuarios/entities/usuario.schema';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const usuario = await this.usuarioModel
      .findOne({ email: loginDto.email })
      .select('+senha')
      .populate('id_cargo')
      .populate('id_departamento')
      .exec();

    if (!usuario) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    if (!usuario.ativo) {
      throw new UnauthorizedException('Usuário inativo');
    }

    const senhaValida = await bcrypt.compare(loginDto.senha, usuario.senha);
    if (!senhaValida) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const cargo: any = usuario.id_cargo;

    const payload = {
      id: usuario.id,
      email: usuario.email,
      nome: usuario.nome,
      cargo: cargo?.descricao,
      nivel_acesso: cargo?.nivel_acesso,
    };

    return {
      access_token: this.jwtService.sign(payload),
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        cargo: usuario.id_cargo,
        departamento: usuario.id_departamento,
      },
    };
  }

  async createUser(createUserDto: CreateUserDto, usuarioLogado: any) {
    if (usuarioLogado.nivel_acesso !== 'Admin') {
      throw new UnauthorizedException('Apenas administradores podem criar usuários');
    }

    const usuarioExistente = await this.usuarioModel.findOne({
      email: createUserDto.email,
    });

    if (usuarioExistente) {
      throw new ConflictException('Email já cadastrado');
    }

    const senhaHash = await bcrypt.hash(createUserDto.senha, 10);

    const novoUsuario = new this.usuarioModel({
      id: uuidv4(),
      nome: createUserDto.nome,
      email: createUserDto.email,
      senha: senhaHash,
      id_cargo: createUserDto.id_cargo,
      id_departamento: createUserDto.id_departamento,
      ativo: true,
    });

    return await novoUsuario.save();
  }

  async validateUser(id: string): Promise<Usuario | null> {
    return await this.usuarioModel
      .findOne({ id })
      .populate('id_cargo')
      .populate('id_departamento')
      .exec();
  }
}
