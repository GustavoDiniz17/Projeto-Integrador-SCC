import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Status } from '../../status/entities/status.entity';
import { Departamento } from '../../departamentos/entities/departamento.entity';
export declare class Chamado {
    id: string;
    codigo: string;
    assunto: string;
    descricao: string;
    prioridade: string;
    status: Status;
    id_status: string;
    solicitante: Usuario;
    id_usuario_solicitante: string;
    departamento: Departamento;
    id_departamento: string;
    data_abertura: Date;
    data_atualizacao: Date;
}
