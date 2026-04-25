import { CargosService } from './cargos.service';
export declare class CargosController {
    private readonly cargosService;
    constructor(cargosService: CargosService);
    findAll(): Promise<import("./entities/cargo.entity").Cargo[]>;
    findByNivelAcesso(nivelAcesso: string): Promise<import("./entities/cargo.entity").Cargo[]>;
    findOne(id: string): Promise<import("./entities/cargo.entity").Cargo | null>;
}
