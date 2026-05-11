import 'dart:io';
import 'package:projeto_integrador/models/status_model.dart';
import 'package:projeto_integrador/services/api/api_response.dart';
import 'package:projeto_integrador/services/api/dev_client.dart';

class StatusService {
  String endpoint = 'status';

  Future<List<StatusModel>> getStatus([
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
    List items = response.body is List ? response.body : [];
    return items.map<StatusModel>((s) => StatusModel.fromJson(s)).toList();
  }

  Future<void> postStatus(StatusModel status) async {
    DevClient client = DevClient();
    ApiResponse response = await client.post(
      endpoint: endpoint,
      data: status.toJson(),
    );
    if (response.statusCode > 299) {
      String msg = response.body['message'] is List 
          ? (response.body['message'] as List).join('\n') 
          : response.body['message'].toString();
      throw HttpException(msg);
    }
  }
}
