import 'package:projeto_integrador/models/usuario_model.dart';

class InteracaoChamadoModel {
  String? id;
  String? idChamado;
  String descricao;
  UsuarioModel? tecnico;

  InteracaoChamadoModel({
    this.id,
    this.idChamado,
    this.descricao = '',
    this.tecnico,
  });

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'id_chamado': idChamado,
      'id_tecnico': tecnico?.id,
      'descricao': descricao,
    };
  }

  factory InteracaoChamadoModel.fromJson(Map<String, dynamic> json) {
    return InteracaoChamadoModel(
      id: json['id'],
      idChamado: json['id_chamado'],
      tecnico: json['Tecnico'] != null
          ? UsuarioModel.fromJson(json['Tecnico'])
          : null,
      descricao: json['descricao'] ?? '',
    );
  }
}
