import 'package:projeto_integrador/enums/categorias_problema_enum.dart';

class ProblemaModel {
  String? id;
  String descricao;
  bool ativo;
  CategoriasProblemaEnum categoriaProblema;

  ProblemaModel({
    this.id,
    this.descricao = '',
    this.ativo = true,
    this.categoriaProblema = CategoriasProblemaEnum.sistema,
  });

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'descricao': descricao,
      'ativo': ativo ? 1 : 0,
      'categoria_problema': categoriaProblema.codigo,
    };
  }

  factory ProblemaModel.fromJson(Map<String, dynamic> json) {
    return ProblemaModel(
      id: json['id'],
      descricao: json['descricao'] ?? '',
      ativo: json['ativo'] == '1' ? true : false,
      categoriaProblema: CategoriasProblemaEnum.values.firstWhere(
        (e) => e.codigo == json['categoria_problema'],
        orElse: () => CategoriasProblemaEnum.sistema,
      ),
    );
  }
}
