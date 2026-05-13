import 'package:projeto_integrador/enums/cargos_enum.dart';
import 'package:projeto_integrador/models/departamento_model.dart';

class UsuarioModel {
  String? id;
  String nome;
  String email;
  String senha;
  CargosEnum cargo;
  DepartamentoModel? departamento;
  bool ativo;

  UsuarioModel({
    this.id,
    this.nome = '',
    this.email = '',
    this.senha = '',
    this.cargo = CargosEnum.estagiario,
    this.departamento,
    this.ativo = true,
  });

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'id_departamento': departamento?.id,
      'nome': nome,
      'email': email,
      'senha': senha,
      'cargo': cargo.codigo,
      'ativo': ativo ? 1 : 0,
    };
  }

  factory UsuarioModel.fromJson(Map<String, dynamic> json) {
    CargosEnum cargoEnum = CargosEnum.estagiario;
    final cargoJson = json['cargo'] ?? json['id_cargo'];

    if (cargoJson != null) {
      if (cargoJson is Map) {
        final codigo =
            cargoJson['id']?.toString() ??
            cargoJson['codigo']?.toString() ??
            cargoJson['descricao']?.toString();
        cargoEnum = CargosEnum.values.firstWhere(
          (e) => e.codigo == codigo || e.descricao == codigo,
          orElse: () => CargosEnum.estagiario,
        );
      } else {
        final codigo = cargoJson.toString();
        cargoEnum = CargosEnum.values.firstWhere(
          (e) => e.codigo == codigo || e.descricao == codigo,
          orElse: () => CargosEnum.estagiario,
        );
      }
    }

    final departamentoJson = json['departamento'] ?? json['id_departamento'];

    return UsuarioModel(
      id: json['id'],
      nome: json['nome'] ?? '',
      email: json['email'] ?? '',
      senha: json['senha'] ?? '',
      cargo: cargoEnum,
      departamento: departamentoJson is Map
          ? DepartamentoModel.fromJson(
              Map<String, dynamic>.from(departamentoJson),
            )
          : null,
      ativo:
          json['ativo'] == true || json['ativo'] == 1 || json['ativo'] == '1',
    );
  }
}
