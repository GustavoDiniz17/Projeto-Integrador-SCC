import { Repository } from 'typeorm';
import { Cargo } from './entities/cargo.entity';
export declare class CargosService {
    private cargoRepository;
    constructor(cargoRepository: Repository<Cargo>);
    findAll(): Promise<Cargo[]>;
    findOne(id: string): Promise<Cargo | null>;
    findByNivelAcesso(nivelAcesso: string): Promise<Cargo[]>;
}
