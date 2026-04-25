import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class Departamento {
    id: string;
    descricao: string;
    abreviacao: string;
    ativo: boolean;
    usuarios: Usuario[];
}
