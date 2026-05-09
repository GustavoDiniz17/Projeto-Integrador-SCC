import { Document } from 'mongoose';
import { Status } from '../../status/entities/status.schema';
import { Usuario } from '../../usuarios/entities/usuario.schema';
import { Departamento } from '../../departamentos/entities/departamento.schema';
export type ChamadoDocument = Chamado & Document;
export declare class Chamado {
    id: string;
    codigo: string;
    assunto: string;
    descricao: string;
    prioridade: string;
    id_status: string;
    id_usuario_solicitante: string;
    id_departamento: string;
    status?: Status;
    solicitante?: Usuario;
    departamento?: Departamento;
}
export declare const ChamadoSchema: import("mongoose").Schema<Chamado, import("mongoose").Model<Chamado, any, any, any, any, any, Chamado>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Chamado, Document<unknown, {}, Chamado, {}, import("mongoose").DefaultSchemaOptions> & Chamado & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, {
    id?: import("mongoose").SchemaDefinitionProperty<string, Chamado, Document<unknown, {}, Chamado, {}, import("mongoose").DefaultSchemaOptions> & Chamado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    codigo?: import("mongoose").SchemaDefinitionProperty<string, Chamado, Document<unknown, {}, Chamado, {}, import("mongoose").DefaultSchemaOptions> & Chamado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    assunto?: import("mongoose").SchemaDefinitionProperty<string, Chamado, Document<unknown, {}, Chamado, {}, import("mongoose").DefaultSchemaOptions> & Chamado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    descricao?: import("mongoose").SchemaDefinitionProperty<string, Chamado, Document<unknown, {}, Chamado, {}, import("mongoose").DefaultSchemaOptions> & Chamado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    prioridade?: import("mongoose").SchemaDefinitionProperty<string, Chamado, Document<unknown, {}, Chamado, {}, import("mongoose").DefaultSchemaOptions> & Chamado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    id_status?: import("mongoose").SchemaDefinitionProperty<string, Chamado, Document<unknown, {}, Chamado, {}, import("mongoose").DefaultSchemaOptions> & Chamado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    id_usuario_solicitante?: import("mongoose").SchemaDefinitionProperty<string, Chamado, Document<unknown, {}, Chamado, {}, import("mongoose").DefaultSchemaOptions> & Chamado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    id_departamento?: import("mongoose").SchemaDefinitionProperty<string, Chamado, Document<unknown, {}, Chamado, {}, import("mongoose").DefaultSchemaOptions> & Chamado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<Status | undefined, Chamado, Document<unknown, {}, Chamado, {}, import("mongoose").DefaultSchemaOptions> & Chamado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    solicitante?: import("mongoose").SchemaDefinitionProperty<Usuario | undefined, Chamado, Document<unknown, {}, Chamado, {}, import("mongoose").DefaultSchemaOptions> & Chamado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    departamento?: import("mongoose").SchemaDefinitionProperty<Departamento | undefined, Chamado, Document<unknown, {}, Chamado, {}, import("mongoose").DefaultSchemaOptions> & Chamado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
}, Chamado>;
