import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CargosService } from './cargos.service';

@ApiTags('Cargos')
@Controller('cargos')
export class CargosController {
  constructor(private readonly cargosService: CargosService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os cargos' })
  @ApiResponse({ status: 200, description: 'Lista de cargos retornada com sucesso' })
  findAll() {
    return this.cargosService.findAll();
  }

  @Get('nivel/:nivelAcesso')
  @ApiOperation({ summary: 'Buscar cargos por nível de acesso' })
  @ApiResponse({ status: 200, description: 'Cargos encontrados' })
  findByNivelAcesso(@Param('nivelAcesso') nivelAcesso: string) {
    return this.cargosService.findByNivelAcesso(nivelAcesso);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar cargo por ID' })
  @ApiResponse({ status: 200, description: 'Cargo encontrado' })
  @ApiResponse({ status: 404, description: 'Cargo não encontrado' })
  findOne(@Param('id') id: string) {
    return this.cargosService.findOne(id);
  }
}
