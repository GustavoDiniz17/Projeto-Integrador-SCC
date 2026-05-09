import { Document } from 'mongoose';
export type StatusDocument = Status & Document;
export declare class Status {
    id: string;
    descricao: string;
    ativo: boolean;
}
export declare const StatusSchema: import("mongoose").Schema<Status, import("mongoose").Model<Status, any, any, any, any, any, Status>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Status, Document<unknown, {}, Status, {}, import("mongoose").DefaultSchemaOptions> & Status & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, {
    id?: import("mongoose").SchemaDefinitionProperty<string, Status, Document<unknown, {}, Status, {}, import("mongoose").DefaultSchemaOptions> & Status & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    descricao?: import("mongoose").SchemaDefinitionProperty<string, Status, Document<unknown, {}, Status, {}, import("mongoose").DefaultSchemaOptions> & Status & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    ativo?: import("mongoose").SchemaDefinitionProperty<boolean, Status, Document<unknown, {}, Status, {}, import("mongoose").DefaultSchemaOptions> & Status & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
}, Status>;
