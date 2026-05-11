import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CargosService } from './cargos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Cargos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('cargos')
export class CargosController {
  constructor(private readonly cargosService: CargosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo cargo' })
  create(@Body() createDto: any) {
    return this.cargosService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os cargos' })
  findAll() {
    return this.cargosService.findAll();
  }

  @Get('nivel/:nivelAcesso')
  @ApiOperation({ summary: 'Buscar cargos por nível de acesso' })
  findByNivelAcesso(@Param('nivelAcesso') nivelAcesso: string) {
    return this.cargosService.findByNivelAcesso(nivelAcesso);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar cargo por ID' })
  findOne(@Param('id') id: string) {
    return this.cargosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar cargo' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.cargosService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover cargo' })
  remove(@Param('id') id: string) {
    return this.cargosService.remove(id);
  }
}
