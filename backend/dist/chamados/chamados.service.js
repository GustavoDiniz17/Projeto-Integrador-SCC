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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const chamado_schema_1 = require("./entities/chamado.schema");
const ia_service_1 = require("../ia/ia.service");
const uuid_1 = require("uuid");
let ChamadosService = class ChamadosService {
    chamadoModel;
    iaService;
    constructor(chamadoModel, iaService) {
        this.chamadoModel = chamadoModel;
        this.iaService = iaService;
    }
    async create(createChamadoDto, usuarioId) {
        const prioridade = this.iaService.classifyPriority(createChamadoDto.descricao);
        const codigo = `CH-${Date.now()}`;
        const novoChamado = new this.chamadoModel({
            id: (0, uuid_1.v4)(),
            codigo,
            ...createChamadoDto,
            prioridade,
            id_usuario_solicitante: usuarioId,
        });
        return await novoChamado.save();
    }
    async findAll() {
        return await this.chamadoModel
            .find()
            .populate('id_status')
            .populate('id_usuario_solicitante')
            .populate('id_departamento')
            .exec();
    }
    async findOne(id) {
        const chamado = await this.chamadoModel
            .findOne({ id })
            .populate('id_status')
            .populate('id_usuario_solicitante')
            .populate('id_departamento')
            .exec();
        if (!chamado) {
            throw new common_1.NotFoundException(`Chamado com ID ${id} não encontrado`);
        }
        return chamado;
    }
    async findByUsuario(idUsuario) {
        return await this.chamadoModel
            .find({ id_usuario_solicitante: idUsuario })
            .populate('id_status')
            .populate('id_usuario_solicitante')
            .populate('id_departamento')
            .exec();
    }
    async findByDepartamento(idDepartamento) {
        return await this.chamadoModel
            .find({ id_departamento: idDepartamento })
            .populate('id_status')
            .populate('id_usuario_solicitante')
            .populate('id_departamento')
            .exec();
    }
    async update(id, updateChamadoDto) {
        const chamado = await this.chamadoModel
            .findOneAndUpdate({ id }, updateChamadoDto, { new: true })
            .exec();
        if (!chamado) {
            throw new common_1.NotFoundException(`Chamado com ID ${id} não encontrado`);
        }
        return chamado;
    }
    async remove(id) {
        const result = await this.chamadoModel.deleteOne({ id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Chamado com ID ${id} não encontrado`);
        }
        return { message: 'Chamado removido com sucesso' };
    }
};
exports.ChamadosService = ChamadosService;
exports.ChamadosService = ChamadosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(chamado_schema_1.Chamado.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        ia_service_1.IaService])
], ChamadosService);
//# sourceMappingURL=chamados.service.js.map