import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(ativo?: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/usuario.schema").UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/usuario.schema").Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findByDepartamento(idDepartamento: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/usuario.schema").UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/usuario.schema").Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findByCargo(idCargo: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/usuario.schema").UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/usuario.schema").Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/usuario.schema").UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/usuario.schema").Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    create(createUsuarioDto: CreateUsuarioDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/usuario.schema").UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/usuario.schema").Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/usuario.schema").UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/usuario.schema").Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
