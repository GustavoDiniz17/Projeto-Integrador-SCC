import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateDepartamentoDto {
  @ApiProperty({ description: 'ID único do departamento' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Descrição do departamento' })
  @IsString()
  descricao: string;

  @ApiProperty({ description: 'Status do departamento', default: true })
  @IsBoolean()
  @IsOptional()
  ativo?: boolean;
}
