import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class Cargo {
    id: string;
    descricao: string;
    nivel_acesso: string;
    usuarios: Usuario[];
}
