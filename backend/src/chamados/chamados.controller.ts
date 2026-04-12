import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ChamadosService } from './chamados.service';
import { CreateChamadoDto } from './dto/create-chamado.dto';

@ApiTags('Chamados')
@Controller('chamados')
export class ChamadosController {
  constructor(private readonly chamadosService: ChamadosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo chamado com classificação de prioridade por IA' })
  @ApiResponse({ status: 201, description: 'Chamado criado com sucesso' })
  create(@Body() createChamadoDto: CreateChamadoDto) {
    return this.chamadosService.create(createChamadoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os chamados' })
  @ApiResponse({ status: 200, description: 'Lista de chamados retornada com sucesso' })
  findAll() {
    return this.chamadosService.findAll();
  }

  @Get('usuario/:idUsuario')
  @ApiOperation({ summary: 'Buscar chamados por usuário solicitante' })
  @ApiResponse({ status: 200, description: 'Chamados encontrados' })
  findByUsuario(@Param('idUsuario') idUsuario: string) {
    return this.chamadosService.findByUsuario(idUsuario);
  }

  @Get('departamento/:idDepartamento')
  @ApiOperation({ summary: 'Buscar chamados por departamento' })
  @ApiResponse({ status: 200, description: 'Chamados encontrados' })
  findByDepartamento(@Param('idDepartamento') idDepartamento: string) {
    return this.chamadosService.findByDepartamento(idDepartamento);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar chamado por ID' })
  @ApiResponse({ status: 200, description: 'Chamado encontrado' })
  @ApiResponse({ status: 404, description: 'Chamado não encontrado' })
  findOne(@Param('id') id: string) {
    return this.chamadosService.findOne(id);
  }
}
