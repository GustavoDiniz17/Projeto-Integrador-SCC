import { DepartamentosService } from './departamentos.service';
export declare class DepartamentosController {
    private readonly departamentosService;
    constructor(departamentosService: DepartamentosService);
    create(createDto: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/departamento.schema").DepartamentoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/departamento.schema").Departamento & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAll(ativo?: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/departamento.schema").DepartamentoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/departamento.schema").Departamento & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/departamento.schema").DepartamentoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/departamento.schema").Departamento & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    update(id: string, updateDto: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/departamento.schema").DepartamentoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/departamento.schema").Departamento & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
