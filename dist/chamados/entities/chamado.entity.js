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
exports.Chamado = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
const status_entity_1 = require("../../status/entities/status.entity");
const departamento_entity_1 = require("../../departamentos/entities/departamento.entity");
let Chamado = class Chamado {
    id;
    codigo;
    assunto;
    descricao;
    prioridade;
    status;
    id_status;
    solicitante;
    id_usuario_solicitante;
    departamento;
    id_departamento;
    data_abertura;
    data_atualizacao;
};
exports.Chamado = Chamado;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Chamado.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Chamado.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Chamado.prototype, "assunto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Chamado.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Chamado.prototype, "prioridade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_entity_1.Status, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_status' }),
    __metadata("design:type", status_entity_1.Status)
], Chamado.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Chamado.prototype, "id_status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario_solicitante' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Chamado.prototype, "solicitante", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Chamado.prototype, "id_usuario_solicitante", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => departamento_entity_1.Departamento, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_departamento' }),
    __metadata("design:type", departamento_entity_1.Departamento)
], Chamado.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Chamado.prototype, "id_departamento", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Chamado.prototype, "data_abertura", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Chamado.prototype, "data_atualizacao", void 0);
exports.Chamado = Chamado = __decorate([
    (0, typeorm_1.Entity)('Chamados')
], Chamado);
//# sourceMappingURL=chamado.entity.js.map