import 'package:projeto_integrador/enums/criticidades_enum.dart';
import 'package:projeto_integrador/models/interacao_chamado_model.dart';
import 'package:projeto_integrador/models/problema_model.dart';
import 'package:projeto_integrador/models/status_model.dart';
import 'package:projeto_integrador/models/tipo_chamado_model.dart';
import 'package:projeto_integrador/models/usuario_model.dart';

class ChamadoModel {
  String? id;
  UsuarioModel? tecnico;
  String codigo;
  String email;
  String assunto;
  String descricao;
  CriticidadesEnum criticidade;
  ProblemaModel? problema;
  StatusModel? status;
  TipoChamadoModel? tipoChamado;
  List<InteracaoChamadoModel>? interacoesChamado;

  ChamadoModel({
    this.id,
    this.tecnico,
    this.codigo = '',
    this.email = '',
    this.assunto = '',
    this.descricao = '',
    this.criticidade = CriticidadesEnum.normal,
    this.problema,
    this.status,
    this.tipoChamado,
    List<InteracaoChamadoModel>? interacoesChamado,
  }) : interacoesChamado = interacoesChamado ?? [];

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'id_tecnico': tecnico?.id,
      'id_problema': problema?.id,
      'assunto': assunto,
      'descricao': descricao,
      'criticidade': criticidade.codigo,
      'interacoes': interacoesChamado!
          .map((interacao) => interacao.toJson())
          .toList(),
    };
  }

  factory ChamadoModel.fromJson(Map<String, dynamic> json) {
    List<InteracaoChamadoModel> listInteracoesChamado = [];
    if (json['interacoes'] != null) {
      List list = json['interacoes'] as List;
      listInteracoesChamado = list.map((interacao) {
        return InteracaoChamadoModel.fromJson(interacao);
      }).toList();
    }

    final statusJson = json['status'];
    final solicitanteJson = json['solicitante'] ?? json['Tecnico'];
    final problemaJson = json['problema'] ?? json['Problema'];
    final prioridade = (json['criticidade'] ?? json['prioridade'] ?? '')
        .toString();
    final prioridadeNormalizada = prioridade.toLowerCase();
    final criticidade =
        prioridadeNormalizada == 'alta' ||
            prioridadeNormalizada == 'critica' ||
            prioridadeNormalizada == 'crÃ­tica'
        ? CriticidadesEnum.critico
        : prioridadeNormalizada == 'urgente'
        ? CriticidadesEnum.urgente
        : CriticidadesEnum.values.firstWhere(
            (e) =>
                e.codigo == prioridade ||
                e.descricao.toLowerCase() == prioridadeNormalizada,
            orElse: () => CriticidadesEnum.normal,
          );

    return ChamadoModel(
      id: json['id'],
      codigo: json['codigo'] ?? '',
      email:
          json['email'] ??
          (solicitanteJson is Map ? solicitanteJson['email'] ?? '' : ''),
      tecnico: solicitanteJson is Map
          ? UsuarioModel.fromJson(Map<String, dynamic>.from(solicitanteJson))
          : null,
      problema: problemaJson is Map
          ? ProblemaModel.fromJson(Map<String, dynamic>.from(problemaJson))
          : null,
      status: statusJson is Map
          ? StatusModel.fromJson(Map<String, dynamic>.from(statusJson))
          : null,
      assunto: json['assunto'] ?? '',
      descricao: json['descricao'] ?? '',
      criticidade: criticidade,
      interacoesChamado: listInteracoesChamado,
    );
  }
}
