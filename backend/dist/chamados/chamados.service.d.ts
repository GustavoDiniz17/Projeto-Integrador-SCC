import { Model } from 'mongoose';
import { Chamado, ChamadoDocument } from './entities/chamado.schema';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';
import { IaService } from '../ia/ia.service';
export declare class ChamadosService {
    private chamadoModel;
    private iaService;
    constructor(chamadoModel: Model<ChamadoDocument>, iaService: IaService);
    create(createChamadoDto: CreateChamadoDto, usuarioId: string): Promise<import("mongoose").Document<unknown, {}, ChamadoDocument, {}, import("mongoose").DefaultSchemaOptions> & Chamado & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, ChamadoDocument, {}, import("mongoose").DefaultSchemaOptions> & Chamado & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, ChamadoDocument, {}, import("mongoose").DefaultSchemaOptions> & Chamado & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findByUsuario(idUsuario: string): Promise<(import("mongoose").Document<unknown, {}, ChamadoDocument, {}, import("mongoose").DefaultSchemaOptions> & Chamado & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findByDepartamento(idDepartamento: string): Promise<(import("mongoose").Document<unknown, {}, ChamadoDocument, {}, import("mongoose").DefaultSchemaOptions> & Chamado & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    update(id: string, updateChamadoDto: UpdateChamadoDto): Promise<import("mongoose").Document<unknown, {}, ChamadoDocument, {}, import("mongoose").DefaultSchemaOptions> & Chamado & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
