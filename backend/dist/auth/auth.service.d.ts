import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthService {
    private usuarioRepository;
    private jwtService;
    constructor(usuarioRepository: Repository<Usuario>, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        usuario: {
            id: string;
            nome: string;
            email: string;
            cargo: import("../cargos/entities/cargo.entity").Cargo;
            departamento: import("../departamentos/entities/departamento.entity").Departamento;
        };
    }>;
    createUser(createUserDto: CreateUserDto, usuarioLogado: any): Promise<Usuario>;
    validateUser(id: string): Promise<Usuario | null>;
}
