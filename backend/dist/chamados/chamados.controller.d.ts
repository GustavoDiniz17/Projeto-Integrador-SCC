import { ChamadosService } from './chamados.service';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';
export declare class ChamadosController {
    private readonly chamadosService;
    constructor(chamadosService: ChamadosService);
    create(createChamadoDto: CreateChamadoDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/chamado.schema").ChamadoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/chamado.schema").Chamado & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/chamado.schema").ChamadoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/chamado.schema").Chamado & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findByUsuario(idUsuario: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/chamado.schema").ChamadoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/chamado.schema").Chamado & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findByDepartamento(idDepartamento: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/chamado.schema").ChamadoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/chamado.schema").Chamado & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/chamado.schema").ChamadoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/chamado.schema").Chamado & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    update(id: string, updateChamadoDto: UpdateChamadoDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/chamado.schema").ChamadoDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/chamado.schema").Chamado & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
