import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
    createUser(createUserDto: CreateUserDto, req: any): Promise<import("../usuarios/entities/usuario.entity").Usuario>;
    getPerfil(req: any): Promise<any>;
}
