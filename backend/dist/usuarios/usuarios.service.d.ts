import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
export declare class UsuariosService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    findAll(): Promise<Usuario[]>;
    findOne(id: string): Promise<Usuario | null>;
    findByDepartamento(idDepartamento: string): Promise<Usuario[]>;
    findByCargo(idCargo: string): Promise<Usuario[]>;
    findAllActive(): Promise<Usuario[]>;
}
