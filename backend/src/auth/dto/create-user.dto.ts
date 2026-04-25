import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength, IsUUID } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome completo' })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({ example: 'joao@scc.com', description: 'Email único' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'senha123', description: 'Senha (mínimo 6 caracteres)' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  senha: string;

  @ApiProperty({ example: 'uuid-cargo', description: 'ID do cargo' })
  @IsUUID()
  id_cargo: string;

  @ApiProperty({ example: 'uuid-departamento', description: 'ID do departamento' })
  @IsUUID()
  id_departamento: string;
}