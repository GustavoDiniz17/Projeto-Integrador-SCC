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
exports.CargosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cargo_schema_1 = require("./entities/cargo.schema");
const uuid_1 = require("uuid");
let CargosService = class CargosService {
    cargoModel;
    constructor(cargoModel) {
        this.cargoModel = cargoModel;
    }
    async create(createDto) {
        const novo = new this.cargoModel({
            id: (0, uuid_1.v4)(),
            ...createDto,
        });
        return await novo.save();
    }
    async findAll() {
        return await this.cargoModel.find().exec();
    }
    async findOne(id) {
        const cargo = await this.cargoModel.findOne({ id }).exec();
        if (!cargo) {
            throw new common_1.NotFoundException(`Cargo com ID ${id} não encontrado`);
        }
        return cargo;
    }
    async findByNivelAcesso(nivelAcesso) {
        return await this.cargoModel.find({ nivel_acesso: nivelAcesso }).exec();
    }
    async update(id, updateDto) {
        const cargo = await this.cargoModel
            .findOneAndUpdate({ id }, updateDto, { new: true })
            .exec();
        if (!cargo) {
            throw new common_1.NotFoundException(`Cargo com ID ${id} não encontrado`);
        }
        return cargo;
    }
    async remove(id) {
        const result = await this.cargoModel.deleteOne({ id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Cargo com ID ${id} não encontrado`);
        }
        return { message: 'Cargo removido com sucesso' };
    }
};
exports.CargosService = CargosService;
exports.CargosService = CargosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cargo_schema_1.Cargo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CargosService);
//# sourceMappingURL=cargos.service.js.map