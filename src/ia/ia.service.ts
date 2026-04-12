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
    // Treinamento básico para classificação de prioridade
    // Alta Prioridade
    this.classifier.addDocument('servidor fora do ar urgente', 'Alta');
    this.classifier.addDocument('sistema indisponível para todos', 'Alta');
    this.classifier.addDocument('erro crítico no banco de dados', 'Alta');
    this.classifier.addDocument('vazamento de dados segurança', 'Alta');
    this.classifier.addDocument('parada total da produção', 'Alta');
    this.classifier.addDocument('não consigo acessar o sistema urgente', 'Alta');

    // Média Prioridade
    this.classifier.addDocument('lentidão no sistema as vezes', 'Média');
    this.classifier.addDocument('impressora não funciona', 'Média');
    this.classifier.addDocument('erro ao gerar relatório mensal', 'Média');
    this.classifier.addDocument('solicitação de novo acesso', 'Média');
    this.classifier.addDocument('configuração de e-mail', 'Média');
    this.classifier.addDocument('problema no office', 'Média');

    // Baixa Prioridade
    this.classifier.addDocument('dúvida sobre funcionalidade', 'Baixa');
    this.classifier.addDocument('sugestão de melhoria na tela', 'Baixa');
    this.classifier.addDocument('troca de mouse ou teclado', 'Baixa');
    this.classifier.addDocument('ajuste de cor no layout', 'Baixa');
    this.classifier.addDocument('agendar treinamento', 'Baixa');
    this.classifier.addDocument('informação sobre feriado', 'Baixa');

    this.classifier.train();
  }

  classifyPriority(description: string): string {
    if (!description) return 'Baixa';
    return this.classifier.classify(description.toLowerCase());
  }
}
