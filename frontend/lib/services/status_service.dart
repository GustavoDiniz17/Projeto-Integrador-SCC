import 'dart:io';

import 'package:projeto_integrador/models/status_model.dart';
import 'package:projeto_integrador/services/api/api_response.dart';
import 'package:projeto_integrador/services/api/dev_client.dart';

class StatusService {
  String endpoint = 'status';

  int count = 0;

  Future<List<StatusModel>> getStatus([
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
        .map<StatusModel>((status) => StatusModel.fromJson(status))
        .toList();
  }

  Future<StatusModel> getStatusId(String id) async {
    DevClient client = DevClient();

    ApiResponse response = await client.get(endpoint: '${endpoint}id');

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }

    return StatusModel.fromJson(response.body['data']);
  }

  Future<bool> deleteStatus(String id) async {
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

  Future<void> updateStatus(StatusModel status) async {
    DevClient client = DevClient();

    ApiResponse response = await client.put(
      endpoint: endpoint,
      data: status.toJson(),
    );

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }
  }

  Future<void> postStatus(StatusModel status) async {
    DevClient client = DevClient();

    ApiResponse response = await client.post(
      endpoint: endpoint,
      data: status.toJson(),
    );

    if (response.statusCode > 299) {
      throw HttpException(response.body['message'].join('\n'));
    }
  }
}
