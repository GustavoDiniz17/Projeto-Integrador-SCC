import 'dart:io';

import 'package:projeto_integrador/models/departamento_model.dart';
import 'package:projeto_integrador/services/api/api_response.dart';
import 'package:projeto_integrador/services/api/dev_client.dart';

class DepartamentosService {
  String endpoint = 'departamentos';

  int count = 0;

  Future<List<DepartamentoModel>> getDepartamentos([
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
        .map<DepartamentoModel>(
          (departamento) => DepartamentoModel.fromJson(departamento),
        )
        .toList();
  }

  Future<DepartamentoModel> getDepartamentoId(String id) async {
    DevClient client = DevClient();

    ApiResponse response = await client.get(endpoint: '${endpoint}id');

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }

    return DepartamentoModel.fromJson(response.body['data']);
  }

  Future<bool> deleteDepartamento(String id) async {
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

  Future<void> updateDepartamento(DepartamentoModel departamento) async {
    DevClient client = DevClient();

    ApiResponse response = await client.put(
      endpoint: endpoint,
      data: departamento.toJson(),
    );

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }
  }

  Future<void> postDepartamento(DepartamentoModel departamento) async {
    DevClient client = DevClient();

    ApiResponse response = await client.post(
      endpoint: endpoint,
      data: departamento.toJson(),
    );

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }
  }
}
