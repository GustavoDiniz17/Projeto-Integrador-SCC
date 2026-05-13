import 'dart:io';
import 'package:projeto_integrador/models/usuario_model.dart';
import 'package:projeto_integrador/services/api/api_response.dart';
import 'package:projeto_integrador/services/api/dev_client.dart';

class UsuariosService {
  String endpoint = 'usuarios';

  Future<List<UsuarioModel>> getUsuarios([
    Map<String, dynamic> filters = const {},
  ]) async {
    DevClient client = DevClient();
    ApiResponse response = await client.get(
      endpoint: endpoint,
      filters: filters,
    );
    if (response.statusCode > 299) {
      String msg = response.body is Map && response.body['message'] != null
          ? (response.body['message'] is List 
              ? (response.body['message'] as List).join('\n') 
              : response.body['message'].toString())
          : response.body.toString();
      throw HttpException(msg);
    }
    
    final body = response.body;
    List items = [];
    if (body is List) {
      items = body;
    }
    return items.map<UsuarioModel>((u) => UsuarioModel.fromJson(u)).toList();
  }

  Future<UsuarioModel> getUsuarioId(String id) async {
    DevClient client = DevClient();
    ApiResponse response = await client.get(endpoint: '$endpoint/$id');
    if (response.statusCode > 299) {
      String msg = response.body is Map && response.body['message'] != null
          ? (response.body['message'] is List 
              ? (response.body['message'] as List).join('\n') 
              : response.body['message'].toString())
          : response.body.toString();
      throw HttpException(msg);
    }
    return UsuarioModel.fromJson(response.body as Map<String, dynamic>);
  }

  Future<bool> deleteUsuario(String id) async {
    DevClient client = DevClient();
    ApiResponse response = await client.delete(endpoint: '$endpoint/$id');
    if (response.statusCode > 299) {
      String msg = response.body is Map && response.body['message'] != null
          ? (response.body['message'] is List 
              ? (response.body['message'] as List).join('\n') 
              : response.body['message'].toString())
          : response.body.toString();
      throw HttpException(msg);
    }
    return true;
  }

  Future<void> updateUsuario(UsuarioModel usuario) async {
    DevClient client = DevClient();
    ApiResponse response = await client.patch(
      endpoint: '$endpoint/${usuario.id}',
      data: usuario.toJson(),
    );
    if (response.statusCode > 299) {
      String msg = response.body is Map && response.body['message'] != null
          ? (response.body['message'] is List 
              ? (response.body['message'] as List).join('\n') 
              : response.body['message'].toString())
          : response.body.toString();
      throw HttpException(msg);
    }
  }

  Future<void> postUsuario(UsuarioModel usuario) async {
    DevClient client = DevClient();
    ApiResponse response = await client.post(
      endpoint: endpoint,
      data: usuario.toJson(),
    );
    if (response.statusCode > 299) {
      String msg = response.body is Map && response.body['message'] != null
          ? (response.body['message'] is List 
              ? (response.body['message'] as List).join('\n') 
              : response.body['message'].toString())
          : response.body.toString();
      throw HttpException(msg);
    }
  }
}
