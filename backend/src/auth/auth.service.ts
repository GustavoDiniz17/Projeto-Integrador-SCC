import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const usuario = await this.usuarioRepository.findOne({
      where: { email: loginDto.email },
      relations: ['cargo', 'departamento'],
      select: ['id', 'nome', 'email', 'senha', 'cargo', 'departamento', 'ativo'],
    });

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

    const payload = {
      id: usuario.id,
      email: usuario.email,
      nome: usuario.nome,
      cargo: usuario.cargo.descricao,
      nivel_acesso: usuario.cargo.nivel_acesso,
    };

    return {
      access_token: this.jwtService.sign(payload),
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        cargo: usuario.cargo,
        departamento: usuario.departamento,
      },
    };
  }

  async createUser(createUserDto: CreateUserDto, usuarioLogado: any) {
    // Apenas Admin pode criar usuários
    if (usuarioLogado.nivel_acesso !== 'Admin') {
      throw new UnauthorizedException('Apenas administradores podem criar usuários');
    }

    const usuarioExistente = await this.usuarioRepository.findOneBy({
      email: createUserDto.email,
    });

    if (usuarioExistente) {
      throw new ConflictException('Email já cadastrado');
    }

    const senhaHash = await bcrypt.hash(createUserDto.senha, 10);

    const novoUsuario = this.usuarioRepository.create({
      id: uuidv4(),
      nome: createUserDto.nome,
      email: createUserDto.email,
      senha: senhaHash,
      id_cargo: createUserDto.id_cargo,
      id_departamento: createUserDto.id_departamento,
      ativo: true,
    });

    return await this.usuarioRepository.save(novoUsuario);
  }

  async validateUser(id: string): Promise<Usuario | null> {
  const usuario = await this.usuarioRepository.findOne({
    where: { id },
    relations: ['cargo', 'departamento'],
  });
  
  return usuario; // Agora o TS entende que pode retornar Usuario ou null
}
}