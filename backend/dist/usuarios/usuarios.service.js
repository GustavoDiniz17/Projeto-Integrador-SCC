"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = __importStar(require("bcryptjs"));
const usuario_schema_1 = require("./entities/usuario.schema");
let UsuariosService = class UsuariosService {
    usuarioModel;
    constructor(usuarioModel) {
        this.usuarioModel = usuarioModel;
    }
    async findAll() {
        return await this.usuarioModel
            .find()
            .populate('id_cargo')
            .populate('id_departamento')
            .exec();
    }
    async findOne(id) {
        const usuario = await this.usuarioModel
            .findOne({ id })
            .populate('id_cargo')
            .populate('id_departamento')
            .exec();
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuário com ID ${id} não encontrado`);
        }
        return usuario;
    }
    async findByEmail(email) {
        return await this.usuarioModel
            .findOne({ email })
            .select('+senha')
            .populate('id_cargo')
            .populate('id_departamento')
            .exec();
    }
    async findByDepartamento(idDepartamento) {
        return await this.usuarioModel
            .find({ id_departamento: idDepartamento })
            .populate('id_cargo')
            .populate('id_departamento')
            .exec();
    }
    async findByCargo(idCargo) {
        return await this.usuarioModel
            .find({ id_cargo: idCargo })
            .populate('id_cargo')
            .populate('id_departamento')
            .exec();
    }
    async findAllActive() {
        return await this.usuarioModel
            .find({ ativo: true })
            .populate('id_cargo')
            .populate('id_departamento')
            .exec();
    }
    async create(createUsuarioDto) {
        const { email, senha } = createUsuarioDto;
        const usuarioExistente = await this.usuarioModel.findOne({ email }).exec();
        if (usuarioExistente) {
            throw new common_1.ConflictException('E-mail já cadastrado');
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(senha, salt);
        const novoUsuario = new this.usuarioModel({
            ...createUsuarioDto,
            senha: hashedPassword,
        });
        return await novoUsuario.save();
    }
    async update(id, updateUsuarioDto) {
        if (updateUsuarioDto.senha) {
            const salt = await bcrypt.genSalt();
            updateUsuarioDto.senha = await bcrypt.hash(updateUsuarioDto.senha, salt);
        }
        const usuario = await this.usuarioModel
            .findOneAndUpdate({ id }, updateUsuarioDto, { new: true })
            .exec();
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuário com ID ${id} não encontrado`);
        }
        return usuario;
    }
    async remove(id) {
        const result = await this.usuarioModel.deleteOne({ id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Usuário com ID ${id} não encontrado`);
        }
        return { message: 'Usuário removido com sucesso' };
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(usuario_schema_1.Usuario.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map