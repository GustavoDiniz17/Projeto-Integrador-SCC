import { Repository } from 'typeorm';
import { Chamado } from './entities/chamado.entity';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { IaService } from '../ia/ia.service';
export declare class ChamadosService {
    private chamadoRepository;
    private iaService;
    constructor(chamadoRepository: Repository<Chamado>, iaService: IaService);
    create(createChamadoDto: CreateChamadoDto): Promise<Chamado>;
    findAll(): Promise<Chamado[]>;
    findOne(id: string): Promise<Chamado | null>;
    findByUsuario(idUsuario: string): Promise<Chamado[]>;
    findByDepartamento(idDepartamento: string): Promise<Chamado[]>;
}
