"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCargoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_cargo_dto_1 = require("./create-cargo.dto");
class UpdateCargoDto extends (0, swagger_1.PartialType)(create_cargo_dto_1.CreateCargoDto) {
}
exports.UpdateCargoDto = UpdateCargoDto;
//# sourceMappingURL=update-cargo.dto.js.map