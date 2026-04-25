import 'package:flutter/material.dart';
import 'package:projeto_integrador/enums/cargos_enum.dart';
import 'package:projeto_integrador/enums/categorias_chamado_enum.dart';
import 'package:projeto_integrador/enums/categorias_problema_enum.dart';
import 'package:projeto_integrador/enums/criticidades_enum.dart';
import 'package:projeto_integrador/models/chamado_model.dart';
import 'package:projeto_integrador/models/departamento_model.dart';
import 'package:projeto_integrador/models/interacao_chamado_model.dart';
import 'package:projeto_integrador/models/problema_model.dart';
import 'package:projeto_integrador/models/status_model.dart';
import 'package:projeto_integrador/models/tipo_chamado_model.dart';
import 'package:projeto_integrador/models/usuario_model.dart';
import 'package:projeto_integrador/widgets/custom_card.dart';

class DadosMockup {
  List<DepartamentoModel> listDepartamentos() {
    return [
      DepartamentoModel(
        id: '1',
        descricao: 'Recursos Humanos',
        abreviacao: 'RH',
        ativo: true,
      ),
      DepartamentoModel(
        id: '2',
        descricao: 'Tecnologia da Informação',
        abreviacao: 'TI',
        ativo: true,
      ),
      DepartamentoModel(
        id: '3',
        descricao: 'Departamento Pessoal',
        abreviacao: 'DP',
        ativo: true,
      ),
    ];
  }

  List<StatusModel> listStatus() {
    return [
      StatusModel(id: '1', descricao: '01_N1', ativo: true),
      StatusModel(id: '2', descricao: 'Aberto', ativo: true),
      StatusModel(id: '3', descricao: 'Aguardando Cliente', ativo: true),
      StatusModel(id: '4', descricao: 'Andamento', ativo: true),
      StatusModel(id: '5', descricao: 'Atendido', ativo: true),
      StatusModel(id: '6', descricao: 'Compra', ativo: true),
      StatusModel(id: '7', descricao: 'Infra Externo', ativo: true),
      StatusModel(id: '8', descricao: 'OP Support', ativo: false),
      StatusModel(id: '9', descricao: 'Pendente', ativo: true),
      StatusModel(id: '10', descricao: 'Re-Aberto', ativo: false),
      StatusModel(id: '11', descricao: 'Sistema Externo', ativo: false),
      StatusModel(id: '12', descricao: 'Suspenso', ativo: false),
      StatusModel(id: '13', descricao: 'Ticket: DealerNet', ativo: false),
      StatusModel(id: '14', descricao: 'Ticket: NBS', ativo: false),
    ];
  }

  List<TipoChamadoModel> listTiposChamado() {
    return [
      /* INCIDENTE */
      TipoChamadoModel(
        id: '1',
        descricao: 'Diminuição de perfomance',
        categoriaChamado: CategoriasChamadoEnum.incidente,
        ativo: true,
      ),
      TipoChamadoModel(
        id: '2',
        descricao: 'Erro',
        categoriaChamado: CategoriasChamadoEnum.incidente,
        ativo: true,
      ),
      TipoChamadoModel(
        id: '3',
        descricao: 'Parada parcial',
        categoriaChamado: CategoriasChamadoEnum.incidente,
        ativo: true,
      ),
      TipoChamadoModel(
        id: '4',
        descricao: 'Parada total',
        categoriaChamado: CategoriasChamadoEnum.incidente,
        ativo: true,
      ),
      /* INCIDENTE */

      /* REQUISIÇÃO */
      TipoChamadoModel(
        id: '5',
        descricao: 'Alteração',
        categoriaChamado: CategoriasChamadoEnum.requisicao,
        ativo: true,
      ),
      TipoChamadoModel(
        id: '6',
        descricao: 'Compra',
        categoriaChamado: CategoriasChamadoEnum.requisicao,
        ativo: true,
      ),
      TipoChamadoModel(
        id: '7',
        descricao: 'Criação',
        categoriaChamado: CategoriasChamadoEnum.requisicao,
        ativo: true,
      ),
      TipoChamadoModel(
        id: '8',
        descricao: 'Instalação',
        categoriaChamado: CategoriasChamadoEnum.requisicao,
        ativo: true,
      ),
      TipoChamadoModel(
        id: '9',
        descricao: 'Instrução',
        categoriaChamado: CategoriasChamadoEnum.requisicao,
        ativo: true,
      ),
      TipoChamadoModel(
        id: '10',
        descricao: 'Liberação',
        categoriaChamado: CategoriasChamadoEnum.requisicao,
        ativo: true,
      ),
      TipoChamadoModel(
        id: '11',
        descricao: 'Preparação',
        categoriaChamado: CategoriasChamadoEnum.requisicao,
        ativo: true,
      ),
      TipoChamadoModel(
        id: '12',
        descricao: 'Remoção',
        categoriaChamado: CategoriasChamadoEnum.requisicao,
        ativo: true,
      ),
      TipoChamadoModel(
        id: '13',
        descricao: 'Treinamento',
        categoriaChamado: CategoriasChamadoEnum.requisicao,
        ativo: true,
      ),
      TipoChamadoModel(
        id: '14',
        descricao: 'Verificação',
        categoriaChamado: CategoriasChamadoEnum.requisicao,
        ativo: true,
      ),
      /* REQUISIÇÃO */
    ];
  }

  List<ProblemaModel> listProblemas() {
    return [
      /* SISTEMA */
      ProblemaModel(
        id: '1',
        descricao: 'Acesso Câmeras',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '2',
        descricao: 'Acesso GAR',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '3',
        descricao: 'Auto Avaliar',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '4',
        descricao: 'DealerNet',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '5',
        descricao: 'DealerNet STD',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '6',
        descricao: 'E-mail',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '7',
        descricao: 'ETKA',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '8',
        descricao: 'LibreOffice',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '9',
        descricao: 'NBS',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '10',
        descricao: 'Outros',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '11',
        descricao: 'Pacote Office',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '12',
        descricao: 'Portal da Rede VW',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '13',
        descricao: 'Portal GRP',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '14',
        descricao: 'Renave',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '15',
        descricao: 'SharePoint',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '16',
        descricao: 'SINC',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '17',
        descricao: 'SiTEF',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '18',
        descricao: 'Sivolks',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '19',
        descricao: 'Syonet',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '20',
        descricao: 'ViaNuvem',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      ProblemaModel(
        id: '21',
        descricao: 'XContact',
        categoriaProblema: CategoriasProblemaEnum.sistema,
        ativo: true,
      ),
      /* SISTEMA */

      /* INFRA */
      ProblemaModel(
        id: '22',
        descricao: 'Acesso GAR',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '23',
        descricao: 'Compra',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '24',
        descricao: 'Headset',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '25',
        descricao: 'Impressora',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '26',
        descricao: 'Internet',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '27',
        descricao: 'Monitor',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '28',
        descricao: 'Mouse',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '29',
        descricao: 'Nobreak',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '30',
        descricao: 'Notebook',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '31',
        descricao: 'Outros',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '32',
        descricao: 'PinPad',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '33',
        descricao: 'Sistema de Alarme',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '34',
        descricao: 'Sistema de Câmera',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '35',
        descricao: 'Switch',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '36',
        descricao: 'Teclado',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '37',
        descricao: 'Telefone',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      ProblemaModel(
        id: '38',
        descricao: 'Thinclient',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: false,
      ),
      ProblemaModel(
        id: '39',
        descricao: 'Webcam',
        categoriaProblema: CategoriasProblemaEnum.infra,
        ativo: true,
      ),
      /* INFRA */
    ];
  }

  List<UsuarioModel> listUsuarios() {
    return [
      UsuarioModel(
        id: '1',
        nome: 'Estagiário 1',
        email: 'estagiario1@estagiario1.com.br',
        senha: '1',
        cargo: CargosEnum.estagiario,
        departamento: DepartamentoModel(
          id: '2',
          descricao: 'Tecnologia da Informação',
          abreviacao: 'TI',
          ativo: true,
        ),
        ativo: true,
      ),
      UsuarioModel(
        id: '2',
        nome: 'Estagiário 2',
        email: 'estagiario2@estagiario2.com.br',
        senha: '2',
        cargo: CargosEnum.estagiario,
        departamento: DepartamentoModel(
          id: '2',
          descricao: 'Tecnologia da Informação',
          abreviacao: 'TI',
          ativo: true,
        ),
        ativo: true,
      ),
      UsuarioModel(
        id: '3',
        nome: 'Júnior 1',
        email: 'junior1@junior1.com.br',
        senha: '1',
        cargo: CargosEnum.junior,
        departamento: DepartamentoModel(
          id: '2',
          descricao: 'Tecnologia da Informação',
          abreviacao: 'TI',
          ativo: true,
        ),
        ativo: true,
      ),
      UsuarioModel(
        id: '4',
        nome: 'Pleno 1',
        email: 'pleno1@pleno1.com.br',
        senha: '1',
        cargo: CargosEnum.pleno,
        departamento: DepartamentoModel(
          id: '2',
          descricao: 'Tecnologia da Informação',
          abreviacao: 'TI',
          ativo: true,
        ),
        ativo: true,
      ),
      UsuarioModel(
        id: '5',
        nome: 'Pleno 2',
        email: 'pleno2@pleno2.com.br',
        senha: '2',
        cargo: CargosEnum.pleno,
        departamento: DepartamentoModel(
          id: '2',
          descricao: 'Tecnologia da Informação',
          abreviacao: 'TI',
          ativo: true,
        ),
        ativo: true,
      ),
      UsuarioModel(
        id: '6',
        nome: 'Gerente 1',
        email: 'gerente1@gerente1.com.br',
        senha: '1',
        cargo: CargosEnum.gerente,
        departamento: DepartamentoModel(
          id: '2',
          descricao: 'Tecnologia da Informação',
          abreviacao: 'TI',
          ativo: true,
        ),
        ativo: true,
      ),
    ];
  }

  List<ChamadoModel> listChamados() {
    return [
      ChamadoModel(
        id: '1',
        tecnico: UsuarioModel(
          id: '5',
          nome: 'Pleno 2',
          email: 'pleno2@pleno2.com.br',
          senha: '2',
          cargo: CargosEnum.pleno,
          departamento: DepartamentoModel(
            id: '2',
            descricao: 'Tecnologia da Informação',
            abreviacao: 'TI',
            ativo: true,
          ),
          ativo: true,
        ),
        codigo: '29907',
        email: 'testeusuario1@gmail.com',
        assunto: 'Instalar Pacote Office',
        descricao:
            'Por gentileza, poderiam instalar o Pacote Office na minha máquina?'
            'Segue AnyDesk? 1 234 456 789',
        criticidade: CriticidadesEnum.normal,
        problema: ProblemaModel(
          id: '11',
          descricao: 'Pacote Office',
          categoriaProblema: CategoriasProblemaEnum.sistema,
          ativo: true,
        ),
        status: StatusModel(id: '9', descricao: 'Pendente', ativo: true),
        tipoChamado: TipoChamadoModel(
          id: '8',
          descricao: 'Instalação',
          categoriaChamado: CategoriasChamadoEnum.requisicao,
          ativo: true,
        ),
        interacoesChamado: [
          InteracaoChamadoModel(
            id: '1',
            idChamado: '1',
            descricao: 'Realizado a instalação, pendente configuração',
            tecnico: UsuarioModel(
              id: '1',
              nome: 'Estagiário 1',
              email: 'estagiario1@estagiario1.com.br',
              senha: '1',
              cargo: CargosEnum.estagiario,
              departamento: DepartamentoModel(
                id: '2',
                descricao: 'Tecnologia da Informação',
                abreviacao: 'TI',
                ativo: true,
              ),
              ativo: true,
            ),
          ),
        ],
      ),
    ];
  }
}

final List<CardData> dashboardMetrics = [
  CardData(
    title: 'Total de Chamados no mês',
    value: '1.572',
    context: '+12% desde ao mês anterior',
    color: Colors.green.shade600,
    icon: Icons.trending_up,
  ),
  CardData(
    title: 'Número de chamados abertos',
    value: '135',
    context: 'Ponto mais alto em 3 meses',
    color: Colors.amber.shade600,
    icon: Icons.numbers,
  ),
  CardData(
    title: 'Média de chamados por analista',
    value: '43',
    context: '+3% em relação ao mês anterior',
    color: Colors.blue.shade600,
    icon: Icons.trending_up,
  ),
  CardData(
    title: 'Tempo Médio de Resposta',
    value: '1h 15m',
    context: 'Redução de 20 minutos',
    color: Colors.green.shade600,
    icon: Icons.access_time_outlined,
  ),
];
