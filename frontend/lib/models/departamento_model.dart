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
      'ativo': ativo,
    };
  }

  factory DepartamentoModel.fromJson(Map<String, dynamic> json) {
    return DepartamentoModel(
      id: json['id'],
      descricao: json['descricao'] ?? '',
      abreviacao: json['abreviacao'] ?? '',
      ativo:
          json['ativo'] == true || json['ativo'] == 1 || json['ativo'] == '1',
    );
  }
}
