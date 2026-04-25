import { Repository } from 'typeorm';
import { Departamento } from './entities/departamento.entity';
export declare class DepartamentosService {
    private departamentoRepository;
    constructor(departamentoRepository: Repository<Departamento>);
    findAll(): Promise<Departamento[]>;
    findOne(id: string): Promise<Departamento | null>;
    findAllActive(): Promise<Departamento[]>;
}
