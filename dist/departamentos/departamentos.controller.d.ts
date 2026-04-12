import { DepartamentosService } from './departamentos.service';
export declare class DepartamentosController {
    private readonly departamentosService;
    constructor(departamentosService: DepartamentosService);
    findAll(ativo?: string): Promise<import("./entities/departamento.entity").Departamento[]>;
    findOne(id: string): Promise<import("./entities/departamento.entity").Departamento | null>;
}
