import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ChamadosService } from './chamados.service';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Chamados')
@Controller('chamados')
export class ChamadosController {
  constructor(private readonly chamadosService: ChamadosService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Criar um novo chamado com classificação de prioridade por IA' })
  @ApiResponse({ status: 201, description: 'Chamado criado com sucesso' })
  create(@Body() createChamadoDto: CreateChamadoDto, @Request() req) {
    return this.chamadosService.create(createChamadoDto, req.user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Listar todos os chamados' })
  @ApiResponse({ status: 200, description: 'Lista de chamados retornada com sucesso' })
  findAll() {
    return this.chamadosService.findAll();
  }

  @Get('usuario/:idUsuario')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Buscar chamados por usuário solicitante' })
  @ApiResponse({ status: 200, description: 'Chamados encontrados' })
  findByUsuario(@Param('idUsuario') idUsuario: string) {
    return this.chamadosService.findByUsuario(idUsuario);
  }

  @Get('departamento/:idDepartamento')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Buscar chamados por departamento' })
  @ApiResponse({ status: 200, description: 'Chamados encontrados' })
  findByDepartamento(@Param('idDepartamento') idDepartamento: string) {
    return this.chamadosService.findByDepartamento(idDepartamento);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Buscar chamado por ID' })
  @ApiResponse({ status: 200, description: 'Chamado encontrado' })
  @ApiResponse({ status: 404, description: 'Chamado não encontrado' })
  findOne(@Param('id') id: string) {
    return this.chamadosService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Atualizar chamado' })
  @ApiResponse({ status: 200, description: 'Chamado atualizado com sucesso' })
  update(@Param('id') id: string, @Body() updateChamadoDto: UpdateChamadoDto) {
    return this.chamadosService.update(id, updateChamadoDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Remover chamado' })
  @ApiResponse({ status: 200, description: 'Chamado removido com sucesso' })
  remove(@Param('id') id: string) {
    return this.chamadosService.remove(id);
  }
}
