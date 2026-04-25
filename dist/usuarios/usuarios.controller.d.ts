import { UsuariosService } from './usuarios.service';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(ativo?: string): Promise<import("./entities/usuario.entity").Usuario[]>;
    findByDepartamento(idDepartamento: string): Promise<import("./entities/usuario.entity").Usuario[]>;
    findByCargo(idCargo: string): Promise<import("./entities/usuario.entity").Usuario[]>;
    findOne(id: string): Promise<import("./entities/usuario.entity").Usuario | null>;
}
