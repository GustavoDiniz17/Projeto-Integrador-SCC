import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:projeto_integrador/services/api/dev_client.dart';
import 'package:projeto_integrador/models/auth_response_model.dart';
import 'package:projeto_integrador/models/usuario_model.dart';

class AuthService {
  final DevClient _client = DevClient();

  Future<AuthResponseModel> login(String email, String senha) async {
    final response = await _client.post(
      endpoint: 'auth/login',
      data: {'email': email, 'senha': senha},
    );

    if (response.statusCode == 200 || response.statusCode == 201) {
      final authData = AuthResponseModel.fromJson(response.body);
      await _saveSession(authData);
      return authData;
    } else {
      String message = 'Erro ao realizar login';
      if (response.body != null && response.body['message'] != null) {
        if (response.body['message'] is List) {
          message = response.body['message'].join('\n');
        } else {
          message = response.body['message'];
        }
      }
      throw Exception(message);
    }
  }

  Future<void> _saveSession(AuthResponseModel data) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('access_token', data.accessToken);
    await prefs.setString('usuario_logado', jsonEncode(data.usuario.toJson()));
  }

  static Future<String?> getToken() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('access_token');
  }

  static Future<UsuarioModel?> getUsuarioLogado() async {
    final prefs = await SharedPreferences.getInstance();
    String? userJson = prefs.getString('usuario_logado');
    if (userJson != null) {
      return UsuarioModel.fromJson(jsonDecode(userJson));
    }
    return null;
  }

  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.clear();
  }
}
