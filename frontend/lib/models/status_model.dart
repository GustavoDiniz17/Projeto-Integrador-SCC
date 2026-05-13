class StatusModel {
  String? id;
  String descricao;
  bool ativo;

  StatusModel({this.id, this.descricao = '', this.ativo = true});

  Map<String, dynamic> toJson() {
    return {
      'id': id, 
      'descricao': descricao, 
      'ativo': ativo
    };
  }

  factory StatusModel.fromJson(Map<String, dynamic> json) {
    return StatusModel(
      id: json['id'],
      descricao: json['descricao'] ?? '',
      ativo: json['ativo'] == true || json['ativo'] == 1 || json['ativo'] == '1',
    );
  }
}
