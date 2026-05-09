import { Document } from 'mongoose';
export type CargoDocument = Cargo & Document;
export declare class Cargo {
    id: string;
    descricao: string;
    nivel_acesso: string;
}
export declare const CargoSchema: import("mongoose").Schema<Cargo, import("mongoose").Model<Cargo, any, any, any, any, any, Cargo>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cargo, Document<unknown, {}, Cargo, {}, import("mongoose").DefaultSchemaOptions> & Cargo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, {
    id?: import("mongoose").SchemaDefinitionProperty<string, Cargo, Document<unknown, {}, Cargo, {}, import("mongoose").DefaultSchemaOptions> & Cargo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    descricao?: import("mongoose").SchemaDefinitionProperty<string, Cargo, Document<unknown, {}, Cargo, {}, import("mongoose").DefaultSchemaOptions> & Cargo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
    nivel_acesso?: import("mongoose").SchemaDefinitionProperty<string, Cargo, Document<unknown, {}, Cargo, {}, import("mongoose").DefaultSchemaOptions> & Cargo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
}, Cargo>;
