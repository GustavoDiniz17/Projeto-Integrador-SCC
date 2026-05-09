import { Document } from 'mongoose';
export type UsuarioDocument = Usuario & Document;
export declare class Usuario {
    id: string;
    nome: string;
    email: string;
    senha: string;
    id_cargo: string;
    id_departamento: string;
    ativo: boolean;
}
export declare const UsuarioSchema: import("mongoose").Schema<Usuario, import("mongoose").Model<Usuario, any, any, any, any, any, Usuario>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Usuario, Document<unknown, {}, Usuario, {}, import("mongoose").DefaultSchemaOptions> & Usuario & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, {
    id?: import("mongoose").SchemaDefinitionProperty<string, Usuario, Document<unknown, {}, Usuario, {}, import("mongoose").DefaultSchemaOptions> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    nome?: import("mongoose").SchemaDefinitionProperty<string, Usuario, Document<unknown, {}, Usuario, {}, import("mongoose").DefaultSchemaOptions> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Usuario, Document<unknown, {}, Usuario, {}, import("mongoose").DefaultSchemaOptions> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    senha?: import("mongoose").SchemaDefinitionProperty<string, Usuario, Document<unknown, {}, Usuario, {}, import("mongoose").DefaultSchemaOptions> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    id_cargo?: import("mongoose").SchemaDefinitionProperty<string, Usuario, Document<unknown, {}, Usuario, {}, import("mongoose").DefaultSchemaOptions> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    id_departamento?: import("mongoose").SchemaDefinitionProperty<string, Usuario, Document<unknown, {}, Usuario, {}, import("mongoose").DefaultSchemaOptions> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    ativo?: import("mongoose").SchemaDefinitionProperty<boolean, Usuario, Document<unknown, {}, Usuario, {}, import("mongoose").DefaultSchemaOptions> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
}, Usuario>;
