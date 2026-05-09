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
exports.CargoSchema = exports.Cargo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Cargo = class Cargo {
    id;
    descricao;
    nivel_acesso;
};
exports.Cargo = Cargo;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Cargo.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Cargo.prototype, "descricao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Cargo.prototype, "nivel_acesso", void 0);
exports.Cargo = Cargo = __decorate([
    (0, mongoose_1.Schema)({ collection: 'Cargos' })
], Cargo);
exports.CargoSchema = mongoose_1.SchemaFactory.createForClass(Cargo);
//# sourceMappingURL=cargo.schema.js.map