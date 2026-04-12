import { Cargo } from '../../cargos/entities/cargo.entity';
import { Departamento } from '../../departamentos/entities/departamento.entity';
export declare class Usuario {
    id: string;
    nome: string;
    email: string;
    senha: string;
    cargo: Cargo;
    id_cargo: string;
    departamento: Departamento;
    id_departamento: string;
    ativo: boolean;
}
