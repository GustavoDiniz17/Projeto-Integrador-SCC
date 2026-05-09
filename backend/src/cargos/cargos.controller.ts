import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CargosService } from './cargos.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@ApiTags('Cargos')
@Controller('cargos')
export class CargosController {
  constructor(private readonly cargosService: CargosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo cargo' })
  @ApiResponse({ status: 201, description: 'Cargo criado com sucesso' })
  create(@Body() createCargoDto: CreateCargoDto) {
    return this.cargosService.create(createCargoDto);
  }

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

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar cargo' })
  @ApiResponse({ status: 200, description: 'Cargo atualizado com sucesso' })
  update(@Param('id') id: string, @Body() updateCargoDto: UpdateCargoDto) {
    return this.cargosService.update(id, updateCargoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover cargo' })
  @ApiResponse({ status: 200, description: 'Cargo removido com sucesso' })
  remove(@Param('id') id: string) {
    return this.cargosService.remove(id);
  }
}
