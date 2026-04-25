import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'admin@scc.com', description: 'Email do usuário' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'senha123', description: 'Senha do usuário' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  senha: string;
}