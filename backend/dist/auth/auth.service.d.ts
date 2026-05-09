import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from '../usuarios/entities/usuario.schema';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthService {
    private usuarioModel;
    private jwtService;
    constructor(usuarioModel: Model<UsuarioDocument>, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        usuario: {
            id: string;
            nome: string;
            email: string;
            cargo: any;
            departamento: any;
        };
    }>;
    createUser(createUserDto: CreateUserDto, usuarioLogado: any): Promise<import("mongoose").Document<unknown, {}, UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    validateUser(id: string): Promise<Usuario | null>;
}
