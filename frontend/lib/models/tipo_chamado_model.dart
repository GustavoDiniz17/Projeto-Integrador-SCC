import 'package:projeto_integrador/enums/categorias_chamado_enum.dart';

class TipoChamadoModel {
  String? id;
  String descricao;
  bool ativo;
  CategoriasChamadoEnum categoriaChamado;

  TipoChamadoModel({
    this.id,
    this.descricao = '',
    this.ativo = true,
    this.categoriaChamado = CategoriasChamadoEnum.requisicao,
  });

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'descricao': descricao,
      'ativo': ativo ? 1 : 0,
      'categoria_chamado': categoriaChamado.codigo,
    };
  }

  factory TipoChamadoModel.fromJson(Map<String, dynamic> json) {
    return TipoChamadoModel(
      id: json['id'],
      descricao: json['descricao'] ?? '',
      ativo: json['ativo'] == '1' ? true : false,
      categoriaChamado: CategoriasChamadoEnum.values.firstWhere(
        (e) => e.codigo == json['categoria_chamado'],
        orElse: () => CategoriasChamadoEnum.requisicao,
      ),
    );
  }
}
