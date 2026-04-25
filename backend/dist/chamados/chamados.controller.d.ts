import { ChamadosService } from './chamados.service';
import { CreateChamadoDto } from './dto/create-chamado.dto';
export declare class ChamadosController {
    private readonly chamadosService;
    constructor(chamadosService: ChamadosService);
    create(createChamadoDto: CreateChamadoDto): Promise<import("./entities/chamado.entity").Chamado>;
    findAll(): Promise<import("./entities/chamado.entity").Chamado[]>;
    findByUsuario(idUsuario: string): Promise<import("./entities/chamado.entity").Chamado[]>;
    findByDepartamento(idDepartamento: string): Promise<import("./entities/chamado.entity").Chamado[]>;
    findOne(id: string): Promise<import("./entities/chamado.entity").Chamado | null>;
}
