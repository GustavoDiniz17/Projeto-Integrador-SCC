import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { DepartamentosService } from './departamentos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Departamentos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('departamentos')
export class DepartamentosController {
  constructor(private readonly departamentosService: DepartamentosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo departamento' })
  create(@Body() createDto: any) {
    return this.departamentosService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os departamentos' })
  @ApiQuery({ name: 'ativo', required: false, type: Boolean })
  findAll(@Query('ativo') ativo?: string) {
    if (ativo === 'true') {
      return this.departamentosService.findAllActive();
    }
    return this.departamentosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar departamento por ID' })
  findOne(@Param('id') id: string) {
    return this.departamentosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar departamento' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.departamentosService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover departamento' })
  remove(@Param('id') id: string) {
    return this.departamentosService.remove(id);
  }
}
