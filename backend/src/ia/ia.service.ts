import { Injectable } from '@nestjs/common';
import * as natural from 'natural';

@Injectable()
export class IaService {
  private classifier: natural.BayesClassifier;

  constructor() {
    this.classifier = new natural.BayesClassifier();
    this.trainClassifier();
  }

  private trainClassifier() {
    // Alta Prioridade
    const alta = [
      'servidor fora do ar urgente', 'sistema indisponível', 'erro crítico',
      'vazamento de dados', 'parada total', 'urgente', 'crítico', 'emergência',
      'não funciona nada', 'banco de dados caiu', 'invasão', 'segurança'
    ];
    alta.forEach(doc => this.classifier.addDocument(doc, 'Alta'));

    // Média Prioridade
    const media = [
      'lentidão', 'impressora', 'relatório', 'novo acesso', 'configuração',
      'office', 'outlook', 'internet lenta', 'pasta compartilhada', 'permissão'
    ];
    media.forEach(doc => this.classifier.addDocument(doc, 'Média'));

    // Baixa Prioridade
    const baixa = [
      'dúvida', 'sugestão', 'melhoria', 'mouse', 'teclado', 'ajuste', 'cor',
      'layout', 'treinamento', 'feriado', 'informação', 'como faço', 'gostaria de saber'
    ];
    baixa.forEach(doc => this.classifier.addDocument(doc, 'Baixa'));

    this.classifier.train();
  }

  classifyPriority(description: string): string {
    if (!description) return 'Baixa';
    const result = this.classifier.classify(description.toLowerCase());
    console.log(`IA Classificou: "${description}" -> ${result}`);
    return result;
  }
}
