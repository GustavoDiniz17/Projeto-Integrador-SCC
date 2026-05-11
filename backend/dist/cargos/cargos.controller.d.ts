import { CargosService } from './cargos.service';
export declare class CargosController {
    private readonly cargosService;
    constructor(cargosService: CargosService);
    create(createDto: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/cargo.schema").CargoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/cargo.schema").Cargo & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/cargo.schema").CargoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/cargo.schema").Cargo & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findByNivelAcesso(nivelAcesso: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/cargo.schema").CargoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/cargo.schema").Cargo & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/cargo.schema").CargoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/cargo.schema").Cargo & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    update(id: string, updateDto: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/cargo.schema").CargoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/cargo.schema").Cargo & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
