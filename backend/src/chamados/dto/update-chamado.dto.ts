import { PartialType } from '@nestjs/swagger';
import { CreateChamadoDto } from './create-chamado.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateChamadoDto extends PartialType(CreateChamadoDto) {
  @ApiProperty({ example: 'ID_DO_STATUS', required: false })
  @IsString()
  @IsOptional()
  id_status?: string;

  @ApiProperty({ example: 'Observações do técnico', required: false })
  @IsString()
  @IsOptional()
  observacoes?: string;
}
