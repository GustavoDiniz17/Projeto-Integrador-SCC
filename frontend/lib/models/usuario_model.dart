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
    return UsuarioModel(
      id: json['id'],

      nome: json['nome'] ?? '',
      email: json['email'] ?? '',
      senha: json['senha'] ?? '',
      cargo: CargosEnum.values.firstWhere(
        (e) => e.codigo == json['cargo'],
        orElse: () => CargosEnum.estagiario,
      ),
      ativo: json['ativo'] == '1' ? true : false,
    );
  }
}
