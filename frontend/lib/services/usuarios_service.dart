import 'dart:io';

import 'package:projeto_integrador/models/usuario_model.dart';
import 'package:projeto_integrador/services/api/api_response.dart';
import 'package:projeto_integrador/services/api/dev_client.dart';

class UsuariosService {
  String endpoint = 'usuarios';

  int count = 0;

  Future<List<UsuarioModel>> getUsuarios([
    Map<String, dynamic> filters = const {},
  ]) async {
    DevClient client = DevClient();

    ApiResponse response = await client.get(
      endpoint: endpoint,
      filters: filters,
    );
    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }

    count = response.body['data']['count'] ?? 0;
    return response.body['data']['items']
        .map<UsuarioModel>((usuario) => UsuarioModel.fromJson(usuario))
        .toList();
  }

  Future<UsuarioModel> getUsuarioId(String id) async {
    DevClient client = DevClient();

    ApiResponse response = await client.get(endpoint: '${endpoint}/$id');

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }

    return UsuarioModel.fromJson(response.body['data']);
  }

  Future<bool> deleteUsuario(String id) async {
    DevClient client = DevClient();

    ApiResponse response = await client.delete(
      endpoint: endpoint,
      filters: {'id': id},
    );

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }
    return true;
  }

  Future<void> updateUsuario(UsuarioModel usuario) async {
    DevClient client = DevClient();

    ApiResponse response = await client.put(
      endpoint: endpoint,
      data: usuario.toJson(),
    );

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }
  }

  Future<void> postUsuario(UsuarioModel usuario) async {
    DevClient client = DevClient();

    ApiResponse response = await client.post(
      endpoint: endpoint,
      data: usuario.toJson(),
    );

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }
  }
}
