import 'dart:io';
import 'package:projeto_integrador/models/departamento_model.dart';
import 'package:projeto_integrador/services/api/api_response.dart';
import 'package:projeto_integrador/services/api/dev_client.dart';

class DepartamentosService {
  String endpoint = 'departamentos';

  Future<List<DepartamentoModel>> getDepartamentos([
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
    
    return items.map<DepartamentoModel>((d) => DepartamentoModel.fromJson(d)).toList();
  }

  Future<DepartamentoModel> getDepartamentoId(String id) async {
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
    return DepartamentoModel.fromJson(response.body as Map<String, dynamic>);
  }

  Future<bool> deleteDepartamento(String id) async {
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

  Future<void> updateDepartamento(DepartamentoModel departamento) async {
    DevClient client = DevClient();
    ApiResponse response = await client.patch(
      endpoint: '$endpoint/${departamento.id}',
      data: departamento.toJson(),
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

  Future<void> postDepartamento(DepartamentoModel departamento) async {
    DevClient client = DevClient();
    ApiResponse response = await client.post(
      endpoint: endpoint,
      data: departamento.toJson(),
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
