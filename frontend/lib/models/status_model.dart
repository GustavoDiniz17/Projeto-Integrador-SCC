class StatusModel {
  String? id;
  String descricao;
  bool ativo;

  StatusModel({this.id, this.descricao = '', this.ativo = true});

  Map<String, dynamic> toJson() {
    return {'id': id, 'descricao': descricao, 'ativo': ativo ? 1 : 0};
  }

  factory StatusModel.fromJson(Map<String, dynamic> json) {
    return StatusModel(
      id: json['id'],
      descricao: json['descricao'] ?? '',
      ativo: json['ativo'] == '1' ? true : false,
    );
  }
}
