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

    return ChamadoModel(
      id: json['id'],
      tecnico: json['Tecnico'] != null
          ? UsuarioModel.fromJson(json['Tecnico'])
          : null,
      problema: json['Problema'] != null
          ? ProblemaModel.fromJson(json['Problema'])
          : null,
      assunto: json['assunto'],
      descricao: json['descricao'] ?? '',
      criticidade: CriticidadesEnum.values.firstWhere(
        (e) => e.codigo == json['criticidade'],
        orElse: () => CriticidadesEnum.normal,
      ),
      interacoesChamado: listInteracoesChamado,
    );
  }
}
