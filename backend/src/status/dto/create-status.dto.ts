import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateStatusDto {
  @ApiProperty({ description: 'ID único do status' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Descrição do status' })
  @IsString()
  descricao: string;

  @ApiProperty({ description: 'Status ativo', default: true })
  @IsBoolean()
  @IsOptional()
  ativo?: boolean;
}
