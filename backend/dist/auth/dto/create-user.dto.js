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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
    nome;
    email;
    senha;
    id_cargo;
    id_departamento;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'João Silva', description: 'Nome completo' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'joao@scc.com', description: 'Email único' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'senha123', description: 'Senha (mínimo 6 caracteres)' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], CreateUserDto.prototype, "senha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-cargo', description: 'ID do cargo' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "id_cargo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-departamento', description: 'ID do departamento' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "id_departamento", void 0);
//# sourceMappingURL=create-user.dto.js.map