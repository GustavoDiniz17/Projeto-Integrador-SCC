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
    // Trata o cargo que pode vir como objeto do backend ou como código
    CargosEnum cargoEnum = CargosEnum.estagiario;
    if (json['cargo'] != null) {
      if (json['cargo'] is Map) {
        // Se vier como objeto (do backend auth/login)
        String? codigo = json['cargo']['id']?.toString() ?? json['cargo']['codigo']?.toString();
        cargoEnum = CargosEnum.values.firstWhere(
          (e) => e.codigo == codigo,
          orElse: () => CargosEnum.estagiario,
        );
      } else {
        // Se vier como código (string/int)
        String codigo = json['cargo'].toString();
        cargoEnum = CargosEnum.values.firstWhere(
          (e) => e.codigo == codigo,
          orElse: () => CargosEnum.estagiario,
        );
      }
    }

    return UsuarioModel(
      id: json['id'],
      nome: json['nome'] ?? '',
      email: json['email'] ?? '',
      senha: json['senha'] ?? '',
      cargo: cargoEnum,
      departamento: json['departamento'] != null 
          ? DepartamentoModel.fromJson(json['departamento']) 
          : null,
      ativo: json['ativo'] == true || json['ativo'] == 1 || json['ativo'] == '1',
    );
  }
}
