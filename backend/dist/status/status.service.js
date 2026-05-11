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
exports.StatusService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const status_schema_1 = require("./entities/status.schema");
const uuid_1 = require("uuid");
let StatusService = class StatusService {
    statusModel;
    constructor(statusModel) {
        this.statusModel = statusModel;
    }
    async create(createDto) {
        const novo = new this.statusModel({
            id: (0, uuid_1.v4)(),
            ...createDto,
            ativo: createDto.ativo !== undefined ? createDto.ativo : true,
        });
        return await novo.save();
    }
    async findAll() {
        return await this.statusModel.find().exec();
    }
    async findOne(id) {
        const status = await this.statusModel.findOne({ id }).exec();
        if (!status) {
            throw new common_1.NotFoundException(`Status com ID ${id} não encontrado`);
        }
        return status;
    }
    async findAllActive() {
        return await this.statusModel.find({ ativo: true }).exec();
    }
    async update(id, updateDto) {
        const status = await this.statusModel
            .findOneAndUpdate({ id }, updateDto, { new: true })
            .exec();
        if (!status) {
            throw new common_1.NotFoundException(`Status com ID ${id} não encontrado`);
        }
        return status;
    }
    async remove(id) {
        const result = await this.statusModel.deleteOne({ id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Status com ID ${id} não encontrado`);
        }
        return { message: 'Status removido com sucesso' };
    }
};
exports.StatusService = StatusService;
exports.StatusService = StatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(status_schema_1.Status.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StatusService);
//# sourceMappingURL=status.service.js.map