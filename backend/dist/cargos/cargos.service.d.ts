import { Model } from 'mongoose';
import { Cargo, CargoDocument } from './entities/cargo.schema';
export declare class CargosService {
    private cargoModel;
    constructor(cargoModel: Model<CargoDocument>);
    create(createDto: any): Promise<import("mongoose").Document<unknown, {}, CargoDocument, {}, import("mongoose").DefaultSchemaOptions> & Cargo & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, CargoDocument, {}, import("mongoose").DefaultSchemaOptions> & Cargo & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, CargoDocument, {}, import("mongoose").DefaultSchemaOptions> & Cargo & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findByNivelAcesso(nivelAcesso: string): Promise<(import("mongoose").Document<unknown, {}, CargoDocument, {}, import("mongoose").DefaultSchemaOptions> & Cargo & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    update(id: string, updateDto: any): Promise<import("mongoose").Document<unknown, {}, CargoDocument, {}, import("mongoose").DefaultSchemaOptions> & Cargo & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
