import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { UsuariosService } from './usuarios.service';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiQuery({ name: 'ativo', required: false, type: Boolean })
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso' })
  findAll(@Query('ativo') ativo?: string) {
    if (ativo === 'true') {
      return this.usuariosService.findAllActive();
    }
    return this.usuariosService.findAll();
  }

  @Get('departamento/:idDepartamento')
  @ApiOperation({ summary: 'Buscar usuários por departamento' })
  @ApiResponse({ status: 200, description: 'Usuários encontrados' })
  findByDepartamento(@Param('idDepartamento') idDepartamento: string) {
    return this.usuariosService.findByDepartamento(idDepartamento);
  }

  @Get('cargo/:idCargo')
  @ApiOperation({ summary: 'Buscar usuários por cargo' })
  @ApiResponse({ status: 200, description: 'Usuários encontrados' })
  findByCargo(@Param('idCargo') idCargo: string) {
    return this.usuariosService.findByCargo(idCargo);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar usuário por ID' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(id);
  }
}
