import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@ApiTags('Status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo status' })
  @ApiResponse({ status: 201, description: 'Status criado com sucesso' })
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os status' })
  @ApiQuery({ name: 'ativo', required: false, type: Boolean })
  @ApiResponse({ status: 200, description: 'Lista de status retornada com sucesso' })
  findAll(@Query('ativo') ativo?: string) {
    if (ativo === 'true') {
      return this.statusService.findAllActive();
    }
    return this.statusService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar status por ID' })
  @ApiResponse({ status: 200, description: 'Status encontrado' })
  @ApiResponse({ status: 404, description: 'Status não encontrado' })
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar status' })
  @ApiResponse({ status: 200, description: 'Status atualizado com sucesso' })
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(id, updateStatusDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover status' })
  @ApiResponse({ status: 200, description: 'Status removido com sucesso' })
  remove(@Param('id') id: string) {
    return this.statusService.remove(id);
  }
}
