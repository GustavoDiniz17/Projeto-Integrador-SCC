"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChamadosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const chamados_service_1 = require("./chamados.service");
const chamados_controller_1 = require("./chamados.controller");
const chamado_schema_1 = require("./entities/chamado.schema");
const ia_service_1 = require("../ia/ia.service");
let ChamadosModule = class ChamadosModule {
};
exports.ChamadosModule = ChamadosModule;
exports.ChamadosModule = ChamadosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: chamado_schema_1.Chamado.name, schema: chamado_schema_1.ChamadoSchema }]),
        ],
        controllers: [chamados_controller_1.ChamadosController],
        providers: [chamados_service_1.ChamadosService, ia_service_1.IaService],
    })
], ChamadosModule);
//# sourceMappingURL=chamados.module.js.map