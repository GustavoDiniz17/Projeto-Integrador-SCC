import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { StatusService } from './status.service';

@ApiTags('Status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

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
}
