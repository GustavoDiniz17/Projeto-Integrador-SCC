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
exports.CargosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cargos_service_1 = require("./cargos.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let CargosController = class CargosController {
    cargosService;
    constructor(cargosService) {
        this.cargosService = cargosService;
    }
    create(createDto) {
        return this.cargosService.create(createDto);
    }
    findAll() {
        return this.cargosService.findAll();
    }
    findByNivelAcesso(nivelAcesso) {
        return this.cargosService.findByNivelAcesso(nivelAcesso);
    }
    findOne(id) {
        return this.cargosService.findOne(id);
    }
    update(id, updateDto) {
        return this.cargosService.update(id, updateDto);
    }
    remove(id) {
        return this.cargosService.remove(id);
    }
};
exports.CargosController = CargosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar novo cargo' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CargosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os cargos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CargosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('nivel/:nivelAcesso'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar cargos por nível de acesso' }),
    __param(0, (0, common_1.Param)('nivelAcesso')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CargosController.prototype, "findByNivelAcesso", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar cargo por ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CargosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar cargo' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CargosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover cargo' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CargosController.prototype, "remove", null);
exports.CargosController = CargosController = __decorate([
    (0, swagger_1.ApiTags)('Cargos'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('cargos'),
    __metadata("design:paramtypes", [cargos_service_1.CargosService])
], CargosController);
//# sourceMappingURL=cargos.controller.js.map