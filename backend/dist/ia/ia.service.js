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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IaService = void 0;
const common_1 = require("@nestjs/common");
const natural = __importStar(require("natural"));
let IaService = class IaService {
    classifier;
    constructor() {
        this.classifier = new natural.BayesClassifier();
        this.trainClassifier();
    }
    trainClassifier() {
        const alta = [
            'servidor fora do ar urgente', 'sistema indisponível', 'erro crítico',
            'vazamento de dados', 'parada total', 'urgente', 'crítico', 'emergência',
            'não funciona nada', 'banco de dados caiu', 'invasão', 'segurança'
        ];
        alta.forEach(doc => this.classifier.addDocument(doc, 'Alta'));
        const media = [
            'lentidão', 'impressora', 'relatório', 'novo acesso', 'configuração',
            'office', 'outlook', 'internet lenta', 'pasta compartilhada', 'permissão'
        ];
        media.forEach(doc => this.classifier.addDocument(doc, 'Média'));
        const baixa = [
            'dúvida', 'sugestão', 'melhoria', 'mouse', 'teclado', 'ajuste', 'cor',
            'layout', 'treinamento', 'feriado', 'informação', 'como faço', 'gostaria de saber'
        ];
        baixa.forEach(doc => this.classifier.addDocument(doc, 'Baixa'));
        this.classifier.train();
    }
    classifyPriority(description) {
        if (!description)
            return 'Baixa';
        const result = this.classifier.classify(description.toLowerCase());
        console.log(`IA Classificou: "${description}" -> ${result}`);
        return result;
    }
};
exports.IaService = IaService;
exports.IaService = IaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], IaService);
//# sourceMappingURL=ia.service.js.map