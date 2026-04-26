import 'package:projeto_integrador/models/usuario_model.dart';

class AuthResponseModel {
  final String accessToken;
  final UsuarioModel usuario;

  AuthResponseModel({required this.accessToken, required this.usuario});

  factory AuthResponseModel.fromJson(Map<String, dynamic> json) {
    return AuthResponseModel(
      accessToken: json['access_token'],
      usuario: UsuarioModel.fromJson(json['usuario']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'access_token': accessToken,
      'usuario': usuario.toJson(),
    };
  }
}
