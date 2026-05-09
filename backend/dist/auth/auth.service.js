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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const usuario_schema_1 = require("../usuarios/entities/usuario.schema");
const bcrypt = __importStar(require("bcryptjs"));
const uuid_1 = require("uuid");
let AuthService = class AuthService {
    usuarioModel;
    jwtService;
    constructor(usuarioModel, jwtService) {
        this.usuarioModel = usuarioModel;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        const usuario = await this.usuarioModel
            .findOne({ email: loginDto.email })
            .select('+senha')
            .populate('cargo')
            .populate('departamento')
            .exec();
        if (!usuario) {
            throw new common_1.UnauthorizedException('Email ou senha inválidos');
        }
        if (!usuario.ativo) {
            throw new common_1.UnauthorizedException('Usuário inativo');
        }
        const senhaValida = await bcrypt.compare(loginDto.senha, usuario.senha);
        if (!senhaValida) {
            throw new common_1.UnauthorizedException('Email ou senha inválidos');
        }
        const cargo = usuario.cargo;
        const payload = {
            id: usuario.id,
            email: usuario.email,
            nome: usuario.nome,
            cargo: cargo?.descricao,
            nivel_acesso: cargo?.nivel_acesso,
        };
        return {
            access_token: this.jwtService.sign(payload),
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                cargo: usuario.cargo,
                departamento: usuario.departamento,
            },
        };
    }
    async createUser(createUserDto, usuarioLogado) {
        if (usuarioLogado.nivel_acesso !== 'Admin') {
            throw new common_1.UnauthorizedException('Apenas administradores podem criar usuários');
        }
        const usuarioExistente = await this.usuarioModel.findOne({
            email: createUserDto.email,
        });
        if (usuarioExistente) {
            throw new common_1.ConflictException('Email já cadastrado');
        }
        const senhaHash = await bcrypt.hash(createUserDto.senha, 10);
        const novoUsuario = new this.usuarioModel({
            id: (0, uuid_1.v4)(),
            nome: createUserDto.nome,
            email: createUserDto.email,
            senha: senhaHash,
            id_cargo: createUserDto.id_cargo,
            id_departamento: createUserDto.id_departamento,
            ativo: true,
        });
        return await novoUsuario.save();
    }
    async validateUser(id) {
        return await this.usuarioModel
            .findOne({ id })
            .populate('cargo')
            .populate('departamento')
            .exec();
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(usuario_schema_1.Usuario.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map