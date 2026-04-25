import 'dart:io';

import 'package:projeto_integrador/models/problema_model.dart';
import 'package:projeto_integrador/services/api/api_response.dart';
import 'package:projeto_integrador/services/api/dev_client.dart';

class ProblemasService {
  String endpoint = 'problemas';

  int count = 0;

  Future<List<ProblemaModel>> getProblemas([
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
        .map<ProblemaModel>((problema) => ProblemaModel.fromJson(problema))
        .toList();
  }

  Future<ProblemaModel> getProblemaId(String id) async {
    DevClient client = DevClient();

    ApiResponse response = await client.get(endpoint: '${endpoint}id');

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }

    return ProblemaModel.fromJson(response.body['data']);
  }

  Future<bool> deleteProblema(String id) async {
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

  Future<void> updateProblema(ProblemaModel problema) async {
    DevClient client = DevClient();

    ApiResponse response = await client.put(
      endpoint: endpoint,
      data: problema.toJson(),
    );

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }
  }

  Future<void> postProblema(ProblemaModel problema) async {
    DevClient client = DevClient();

    ApiResponse response = await client.post(
      endpoint: endpoint,
      data: problema.toJson(),
    );

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }
  }
}
