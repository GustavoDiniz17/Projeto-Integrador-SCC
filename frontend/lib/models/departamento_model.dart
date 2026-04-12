class DepartamentoModel {
  String? id;
  String descricao;
  String abreviacao;
  bool ativo;

  DepartamentoModel({
    this.id,
    this.descricao = '',
    this.abreviacao = '',
    this.ativo = true,
  });

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'descricao': descricao,
      'abreviacao': abreviacao,
      'ativo': ativo ? 1 : 0,
    };
  }

  factory DepartamentoModel.fromJson(Map<String, dynamic> json) {
    return DepartamentoModel(
      id: json['id'],
      descricao: json['descricao'] ?? '',
      abreviacao: json['abreviacao'] ?? '',
      ativo: json['ativo'] == '1' ? true : false,
    );
  }
}
