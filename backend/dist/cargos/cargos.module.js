"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cargos_service_1 = require("./cargos.service");
const cargos_controller_1 = require("./cargos.controller");
const cargo_schema_1 = require("./entities/cargo.schema");
let CargosModule = class CargosModule {
};
exports.CargosModule = CargosModule;
exports.CargosModule = CargosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: cargo_schema_1.Cargo.name, schema: cargo_schema_1.CargoSchema }]),
        ],
        controllers: [cargos_controller_1.CargosController],
        providers: [cargos_service_1.CargosService],
        exports: [cargos_service_1.CargosService],
    })
], CargosModule);
//# sourceMappingURL=cargos.module.js.map