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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChamadoSchema = exports.Chamado = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Chamado = class Chamado {
    id;
    codigo;
    assunto;
    descricao;
    prioridade;
    id_status;
    id_usuario_solicitante;
    id_departamento;
};
exports.Chamado = Chamado;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Chamado.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Chamado.prototype, "codigo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Chamado.prototype, "assunto", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Chamado.prototype, "descricao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Chamado.prototype, "prioridade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Chamado.prototype, "id_status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Chamado.prototype, "id_usuario_solicitante", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Chamado.prototype, "id_departamento", void 0);
exports.Chamado = Chamado = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'Chamados',
        timestamps: { createdAt: 'data_abertura', updatedAt: 'data_atualizacao' },
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })
], Chamado);
exports.ChamadoSchema = mongoose_1.SchemaFactory.createForClass(Chamado);
exports.ChamadoSchema.virtual('status', {
    ref: 'Status',
    localField: 'id_status',
    foreignField: 'id',
    justOne: true
});
exports.ChamadoSchema.virtual('solicitante', {
    ref: 'Usuario',
    localField: 'id_usuario_solicitante',
    foreignField: 'id',
    justOne: true
});
exports.ChamadoSchema.virtual('departamento', {
    ref: 'Departamento',
    localField: 'id_departamento',
    foreignField: 'id',
    justOne: true
});
//# sourceMappingURL=chamado.schema.js.map