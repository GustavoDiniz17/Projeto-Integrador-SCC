import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { StatusService } from './status.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Status')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo status' })
  create(@Body() createDto: any) {
    return this.statusService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os status' })
  @ApiQuery({ name: 'ativo', required: false, type: Boolean })
  findAll(@Query('ativo') ativo?: string) {
    if (ativo === 'true') {
      return this.statusService.findAllActive();
    }
    return this.statusService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar status por ID' })
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar status' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.statusService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover status' })
  remove(@Param('id') id: string) {
    return this.statusService.remove(id);
  }
}
