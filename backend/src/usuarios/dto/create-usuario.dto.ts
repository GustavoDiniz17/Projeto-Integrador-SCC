import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional, IsBoolean } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'João Silva' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'joao@email.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'senha123' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  senha: string;

  @ApiProperty({ example: 'ID_DO_CARGO', required: false })
  @IsString()
  @IsOptional()
  id_cargo?: string;

  @ApiProperty({ example: 'ID_DO_DEPARTAMENTO', required: false })
  @IsString()
  @IsOptional()
  id_departamento?: string;

  @ApiProperty({ example: true, default: true })
  @IsBoolean()
  @IsOptional()
  ativo?: boolean;
}
