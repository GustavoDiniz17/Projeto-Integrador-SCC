import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateCargoDto {
  @ApiProperty({ description: 'ID único do cargo' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Descrição do cargo' })
  @IsString()
  descricao: string;

  @ApiProperty({ description: 'Nível de acesso (Admin, Técnico, Usuário)' })
  @IsString()
  nivel_acesso: string;
}
