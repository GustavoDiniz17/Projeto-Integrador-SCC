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
            cargo: any;
            departamento: any;
        };
    }>;
    createUser(createUserDto: CreateUserDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("../usuarios/entities/usuario.schema").UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../usuarios/entities/usuario.schema").Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    getPerfil(req: any): Promise<any>;
}
