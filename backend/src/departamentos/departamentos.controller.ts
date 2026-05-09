import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { DepartamentosService } from './departamentos.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';

@ApiTags('Departamentos')
@Controller('departamentos')
export class DepartamentosController {
  constructor(private readonly departamentosService: DepartamentosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo departamento' })
  @ApiResponse({ status: 201, description: 'Departamento criado com sucesso' })
  create(@Body() createDepartamentoDto: CreateDepartamentoDto) {
    return this.departamentosService.create(createDepartamentoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os departamentos' })
  @ApiQuery({ name: 'ativo', required: false, type: Boolean })
  @ApiResponse({ status: 200, description: 'Lista de departamentos retornada com sucesso' })
  findAll(@Query('ativo') ativo?: string) {
    if (ativo === 'true') {
      return this.departamentosService.findAllActive();
    }
    return this.departamentosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar departamento por ID' })
  @ApiResponse({ status: 200, description: 'Departamento encontrado' })
  @ApiResponse({ status: 404, description: 'Departamento não encontrado' })
  findOne(@Param('id') id: string) {
    return this.departamentosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar departamento' })
  @ApiResponse({ status: 200, description: 'Departamento atualizado com sucesso' })
  update(@Param('id') id: string, @Body() updateDepartamentoDto: UpdateDepartamentoDto) {
    return this.departamentosService.update(id, updateDepartamentoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover departamento' })
  @ApiResponse({ status: 200, description: 'Departamento removido com sucesso' })
  remove(@Param('id') id: string) {
    return this.departamentosService.remove(id);
  }
}
