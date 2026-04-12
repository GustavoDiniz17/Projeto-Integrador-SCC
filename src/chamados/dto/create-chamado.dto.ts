import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateChamadoDto {
  @ApiProperty({ example: 'Erro no login', description: 'Assunto do chamado' })
  @IsNotEmpty()
  @IsString()
  assunto: string;

  @ApiProperty({ example: 'Não consigo acessar o sistema urgente', description: 'Descrição detalhada' })
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @ApiProperty({ example: 'uuid-usuario', description: 'ID do usuário solicitante' })
  @IsNotEmpty()
  @IsUUID()
  id_usuario_solicitante: string;

  @ApiProperty({ example: 'uuid-departamento', description: 'ID do departamento' })
  @IsNotEmpty()
  @IsUUID()
  id_departamento: string;

  @ApiProperty({ example: 'uuid-status', description: 'ID do status inicial' })
  @IsNotEmpty()
  @IsUUID()
  id_status: string;
}
