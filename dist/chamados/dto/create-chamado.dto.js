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
exports.CreateChamadoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateChamadoDto {
    assunto;
    descricao;
    id_usuario_solicitante;
    id_departamento;
    id_status;
}
exports.CreateChamadoDto = CreateChamadoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Erro no login', description: 'Assunto do chamado' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateChamadoDto.prototype, "assunto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Não consigo acessar o sistema urgente', description: 'Descrição detalhada' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateChamadoDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-usuario', description: 'ID do usuário solicitante' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateChamadoDto.prototype, "id_usuario_solicitante", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-departamento', description: 'ID do departamento' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateChamadoDto.prototype, "id_departamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-status', description: 'ID do status inicial' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateChamadoDto.prototype, "id_status", void 0);
//# sourceMappingURL=create-chamado.dto.js.map