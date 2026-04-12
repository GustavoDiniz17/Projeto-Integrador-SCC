import 'dart:io';

import 'package:projeto_integrador/models/chamado_model.dart';
import 'package:projeto_integrador/services/api/api_response.dart';
import 'package:projeto_integrador/services/api/dev_client.dart';

class ChamadosService {
  String endpoint = 'chamados';

  int count = 0;

  Future<List<ChamadoModel>> getChamados([
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
        .map<ChamadoModel>((chamado) => ChamadoModel.fromJson(chamado))
        .toList();
  }

  Future<ChamadoModel> getChamadoId(String id) async {
    DevClient client = DevClient();

    ApiResponse response = await client.get(endpoint: '${endpoint}/$id');

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }

    return ChamadoModel.fromJson(response.body['data']);
  }

  Future<bool> deleteChamado(String id) async {
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

  Future<void> updateChamado(ChamadoModel chamado) async {
    DevClient client = DevClient();

    ApiResponse response = await client.put(
      endpoint: endpoint,
      data: chamado.toJson(),
    );

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }
  }

  Future<void> postChamado(ChamadoModel chamado) async {
    DevClient client = DevClient();

    ApiResponse response = await client.post(
      endpoint: endpoint,
      data: chamado.toJson(),
    );

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }
  }
}
