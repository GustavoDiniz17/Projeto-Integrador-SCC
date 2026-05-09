"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChamadosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const chamados_service_1 = require("./chamados.service");
const create_chamado_dto_1 = require("./dto/create-chamado.dto");
const update_chamado_dto_1 = require("./dto/update-chamado.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let ChamadosController = class ChamadosController {
    chamadosService;
    constructor(chamadosService) {
        this.chamadosService = chamadosService;
    }
    create(createChamadoDto, req) {
        return this.chamadosService.create(createChamadoDto, req.user.id);
    }
    findAll() {
        return this.chamadosService.findAll();
    }
    findByUsuario(idUsuario) {
        return this.chamadosService.findByUsuario(idUsuario);
    }
    findByDepartamento(idDepartamento) {
        return this.chamadosService.findByDepartamento(idDepartamento);
    }
    findOne(id) {
        return this.chamadosService.findOne(id);
    }
    update(id, updateChamadoDto) {
        return this.chamadosService.update(id, updateChamadoDto);
    }
    remove(id) {
        return this.chamadosService.remove(id);
    }
};
exports.ChamadosController = ChamadosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo chamado com classificação de prioridade por IA' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Chamado criado com sucesso' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chamado_dto_1.CreateChamadoDto, Object]),
    __metadata("design:returntype", void 0)
], ChamadosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os chamados' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de chamados retornada com sucesso' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChamadosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('usuario/:idUsuario'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar chamados por usuário solicitante' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Chamados encontrados' }),
    __param(0, (0, common_1.Param)('idUsuario')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChamadosController.prototype, "findByUsuario", null);
__decorate([
    (0, common_1.Get)('departamento/:idDepartamento'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar chamados por departamento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Chamados encontrados' }),
    __param(0, (0, common_1.Param)('idDepartamento')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChamadosController.prototype, "findByDepartamento", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar chamado por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Chamado encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Chamado não encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChamadosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar chamado' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Chamado atualizado com sucesso' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_chamado_dto_1.UpdateChamadoDto]),
    __metadata("design:returntype", void 0)
], ChamadosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Remover chamado' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Chamado removido com sucesso' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChamadosController.prototype, "remove", null);
exports.ChamadosController = ChamadosController = __decorate([
    (0, swagger_1.ApiTags)('Chamados'),
    (0, common_1.Controller)('chamados'),
    __metadata("design:paramtypes", [chamados_service_1.ChamadosService])
], ChamadosController);
//# sourceMappingURL=chamados.controller.js.map