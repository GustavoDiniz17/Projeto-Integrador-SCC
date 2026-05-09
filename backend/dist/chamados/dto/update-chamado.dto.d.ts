import { CreateChamadoDto } from './create-chamado.dto';
declare const UpdateChamadoDto_base: import("@nestjs/common").Type<Partial<CreateChamadoDto>>;
export declare class UpdateChamadoDto extends UpdateChamadoDto_base {
    id_status?: string;
    observacoes?: string;
}
export {};
