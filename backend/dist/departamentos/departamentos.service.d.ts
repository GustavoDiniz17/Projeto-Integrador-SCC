import { Model } from 'mongoose';
import { Departamento, DepartamentoDocument } from './entities/departamento.schema';
export declare class DepartamentosService {
    private departamentoModel;
    constructor(departamentoModel: Model<DepartamentoDocument>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, DepartamentoDocument, {}, import("mongoose").DefaultSchemaOptions> & Departamento & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, DepartamentoDocument, {}, import("mongoose").DefaultSchemaOptions> & Departamento & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAllActive(): Promise<(import("mongoose").Document<unknown, {}, DepartamentoDocument, {}, import("mongoose").DefaultSchemaOptions> & Departamento & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
}
