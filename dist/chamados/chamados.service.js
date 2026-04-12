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
exports.ChamadosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const chamado_entity_1 = require("./entities/chamado.entity");
const ia_service_1 = require("../ia/ia.service");
const uuid_1 = require("uuid");
let ChamadosService = class ChamadosService {
    chamadoRepository;
    iaService;
    constructor(chamadoRepository, iaService) {
        this.chamadoRepository = chamadoRepository;
        this.iaService = iaService;
    }
    async create(createChamadoDto) {
        const prioridade = this.iaService.classifyPriority(createChamadoDto.descricao);
        const codigo = `CH-${Date.now()}`;
        const chamado = this.chamadoRepository.create({
            id: (0, uuid_1.v4)(),
            ...createChamadoDto,
            prioridade,
            codigo,
        });
        return await this.chamadoRepository.save(chamado);
    }
    async findAll() {
        return await this.chamadoRepository.find();
    }
    async findOne(id) {
        return await this.chamadoRepository.findOneBy({ id });
    }
    async findByUsuario(idUsuario) {
        return await this.chamadoRepository.find({
            where: { id_usuario_solicitante: idUsuario },
        });
    }
    async findByDepartamento(idDepartamento) {
        return await this.chamadoRepository.find({
            where: { id_departamento: idDepartamento },
        });
    }
};
exports.ChamadosService = ChamadosService;
exports.ChamadosService = ChamadosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chamado_entity_1.Chamado)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ia_service_1.IaService])
], ChamadosService);
//# sourceMappingURL=chamados.service.js.map