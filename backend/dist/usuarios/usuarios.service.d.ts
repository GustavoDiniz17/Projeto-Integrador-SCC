import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from './entities/usuario.schema';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosService {
    private usuarioModel;
    constructor(usuarioModel: Model<UsuarioDocument>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    findByDepartamento(idDepartamento: string): Promise<(import("mongoose").Document<unknown, {}, UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findByCargo(idCargo: string): Promise<(import("mongoose").Document<unknown, {}, UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findAllActive(): Promise<(import("mongoose").Document<unknown, {}, UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    create(createUsuarioDto: CreateUsuarioDto): Promise<import("mongoose").Document<unknown, {}, UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<import("mongoose").Document<unknown, {}, UsuarioDocument, {}, import("mongoose").DefaultSchemaOptions> & Usuario & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
