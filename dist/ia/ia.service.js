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
        this.classifier.addDocument('servidor fora do ar urgente', 'Alta');
        this.classifier.addDocument('sistema indisponível para todos', 'Alta');
        this.classifier.addDocument('erro crítico no banco de dados', 'Alta');
        this.classifier.addDocument('vazamento de dados segurança', 'Alta');
        this.classifier.addDocument('parada total da produção', 'Alta');
        this.classifier.addDocument('não consigo acessar o sistema urgente', 'Alta');
        this.classifier.addDocument('lentidão no sistema as vezes', 'Média');
        this.classifier.addDocument('impressora não funciona', 'Média');
        this.classifier.addDocument('erro ao gerar relatório mensal', 'Média');
        this.classifier.addDocument('solicitação de novo acesso', 'Média');
        this.classifier.addDocument('configuração de e-mail', 'Média');
        this.classifier.addDocument('problema no office', 'Média');
        this.classifier.addDocument('dúvida sobre funcionalidade', 'Baixa');
        this.classifier.addDocument('sugestão de melhoria na tela', 'Baixa');
        this.classifier.addDocument('troca de mouse ou teclado', 'Baixa');
        this.classifier.addDocument('ajuste de cor no layout', 'Baixa');
        this.classifier.addDocument('agendar treinamento', 'Baixa');
        this.classifier.addDocument('informação sobre feriado', 'Baixa');
        this.classifier.train();
    }
    classifyPriority(description) {
        if (!description)
            return 'Baixa';
        return this.classifier.classify(description.toLowerCase());
    }
};
exports.IaService = IaService;
exports.IaService = IaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], IaService);
//# sourceMappingURL=ia.service.js.map