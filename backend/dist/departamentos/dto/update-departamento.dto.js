"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDepartamentoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_departamento_dto_1 = require("./create-departamento.dto");
class UpdateDepartamentoDto extends (0, swagger_1.PartialType)(create_departamento_dto_1.CreateDepartamentoDto) {
}
exports.UpdateDepartamentoDto = UpdateDepartamentoDto;
//# sourceMappingURL=update-departamento.dto.js.map