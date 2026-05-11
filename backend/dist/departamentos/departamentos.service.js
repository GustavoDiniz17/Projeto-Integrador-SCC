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
exports.DepartamentosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const departamento_schema_1 = require("./entities/departamento.schema");
const uuid_1 = require("uuid");
let DepartamentosService = class DepartamentosService {
    departamentoModel;
    constructor(departamentoModel) {
        this.departamentoModel = departamentoModel;
    }
    async create(createDto) {
        const novo = new this.departamentoModel({
            id: (0, uuid_1.v4)(),
            ...createDto,
            ativo: createDto.ativo !== undefined ? createDto.ativo : true,
        });
        return await novo.save();
    }
    async findAll() {
        return await this.departamentoModel.find().exec();
    }
    async findOne(id) {
        const departamento = await this.departamentoModel.findOne({ id }).exec();
        if (!departamento) {
            throw new common_1.NotFoundException(`Departamento com ID ${id} não encontrado`);
        }
        return departamento;
    }
    async findAllActive() {
        return await this.departamentoModel.find({ ativo: true }).exec();
    }
    async update(id, updateDto) {
        const departamento = await this.departamentoModel
            .findOneAndUpdate({ id }, updateDto, { new: true })
            .exec();
        if (!departamento) {
            throw new common_1.NotFoundException(`Departamento com ID ${id} não encontrado`);
        }
        return departamento;
    }
    async remove(id) {
        const result = await this.departamentoModel.deleteOne({ id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Departamento com ID ${id} não encontrado`);
        }
        return { message: 'Departamento removido com sucesso' };
    }
};
exports.DepartamentosService = DepartamentosService;
exports.DepartamentosService = DepartamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(departamento_schema_1.Departamento.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DepartamentosService);
//# sourceMappingURL=departamentos.service.js.map