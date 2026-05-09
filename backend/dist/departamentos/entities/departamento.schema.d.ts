import { Document } from 'mongoose';
export type DepartamentoDocument = Departamento & Document;
export declare class Departamento {
    id: string;
    descricao: string;
    abreviacao: string;
    ativo: boolean;
}
export declare const DepartamentoSchema: import("mongoose").Schema<Departamento, import("mongoose").Model<Departamento, any, any, any, any, any, Departamento>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Departamento, Document<unknown, {}, Departamento, {}, import("mongoose").DefaultSchemaOptions> & Departamento & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, {
    id?: import("mongoose").SchemaDefinitionProperty<string, Departamento, Document<unknown, {}, Departamento, {}, import("mongoose").DefaultSchemaOptions> & Departamento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    descricao?: import("mongoose").SchemaDefinitionProperty<string, Departamento, Document<unknown, {}, Departamento, {}, import("mongoose").DefaultSchemaOptions> & Departamento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    abreviacao?: import("mongoose").SchemaDefinitionProperty<string, Departamento, Document<unknown, {}, Departamento, {}, import("mongoose").DefaultSchemaOptions> & Departamento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    ativo?: import("mongoose").SchemaDefinitionProperty<boolean, Departamento, Document<unknown, {}, Departamento, {}, import("mongoose").DefaultSchemaOptions> & Departamento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
}, Departamento>;
