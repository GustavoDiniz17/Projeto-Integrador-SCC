import 'dart:io';
import 'package:projeto_integrador/models/chamado_model.dart';
import 'package:projeto_integrador/services/api/api_response.dart';
import 'package:projeto_integrador/services/api/dev_client.dart';

class ChamadosService {
  String endpoint = 'chamados';

  Future<List<ChamadoModel>> getChamados([
    Map<String, dynamic> filters = const {},
  ]) async {
    DevClient client = DevClient();
    ApiResponse response = await client.get(
      endpoint: endpoint,
      filters: filters,
    );
    if (response.statusCode > 299) {
      String msg = response.body['message'] is List 
          ? (response.body['message'] as List).join('\n') 
          : response.body['message'].toString();
      throw HttpException(msg);
    }
    final body = response.body; List items = body is List ? body : [];
    return items.map<ChamadoModel>((c) => ChamadoModel.fromJson(c)).toList();
  }

  Future<ChamadoModel> getChamadoId(String id) async {
    DevClient client = DevClient();
    ApiResponse response = await client.get(endpoint: '$endpoint/$id');
    if (response.statusCode > 299) {
      String msg = response.body['message'] is List 
          ? (response.body['message'] as List).join('\n') 
          : response.body['message'].toString();
      throw HttpException(msg);
    }
    return ChamadoModel.fromJson(response.body);
  }

  Future<bool> deleteChamado(String id) async {
    DevClient client = DevClient();
    ApiResponse response = await client.delete(endpoint: '$endpoint/$id');
    if (response.statusCode > 299) {
      String msg = response.body['message'] is List 
          ? (response.body['message'] as List).join('\n') 
          : response.body['message'].toString();
      throw HttpException(msg);
    }
    return true;
  }

  Future<void> updateChamado(ChamadoModel chamado) async {
    DevClient client = DevClient();
    ApiResponse response = await client.patch(
      endpoint: '$endpoint/${chamado.id}',
      data: chamado.toJson(),
    );
    if (response.statusCode > 299) {
      String msg = response.body['message'] is List 
          ? (response.body['message'] as List).join('\n') 
          : response.body['message'].toString();
      throw HttpException(msg);
    }
  }

  Future<void> postChamado(ChamadoModel chamado) async {
    DevClient client = DevClient();
    ApiResponse response = await client.post(
      endpoint: endpoint,
      data: chamado.toJson(),
    );
    if (response.statusCode > 299) {
      String msg = response.body['message'] is List 
          ? (response.body['message'] as List).join('\n') 
          : response.body['message'].toString();
      throw HttpException(msg);
    }
  }
}
