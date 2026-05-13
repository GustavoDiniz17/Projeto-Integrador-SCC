import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:projeto_integrador/services/api/api_request.dart';
import 'package:projeto_integrador/services/api/api_response.dart';

class DevClient {
  bool isAuthRequired = true;
  String baseUrl = "http://localhost:3000/";

  Future<Map<String, String>> _getHeaders() async {
    final prefs = await SharedPreferences.getInstance();
    String? token = prefs.getString('access_token');
    
    Map<String, String> headers = {
      'Content-Type': 'application/json',
    };
    if (token != null) {
      headers['Authorization'] = 'Bearer $token';
    }
    return headers;
  }

  Future<ApiResponse> delete({required String endpoint, Map? filters}) async {
    final headers = await _getHeaders();
    ApiRequest request = ApiRequest(
      url: baseUrl + endpoint,
      requestType: RequestType.DELETE,
      header: headers,
      params: filters,
    );
    ApiResponse response = await request.makeCall();
    return response;
  }

  Future<ApiResponse> get({
    required String endpoint,
    Map<String, dynamic>? filters,
  }) async {
    final headers = await _getHeaders();
    ApiRequest request = ApiRequest(
      url: baseUrl + endpoint,
      requestType: RequestType.GET,
      header: headers,
      params: filters,
    );
    ApiResponse response = await request.makeCall();
    return response;
  }

  Future<ApiResponse> patch({required String endpoint, Map? data}) async {
    final headers = await _getHeaders();
    ApiRequest request = ApiRequest(
      url: baseUrl + endpoint,
      requestType: RequestType.PATCH,
      header: headers,
      body: jsonEncode(data),
    );
    ApiResponse response = await request.makeCall();
    return response;
  }

  Future<ApiResponse> post({required String endpoint, Map? data}) async {
    final headers = await _getHeaders();
    ApiRequest request = ApiRequest(
      url: baseUrl + endpoint,
      requestType: RequestType.POST,
      header: headers,
      body: jsonEncode(data),
    );
    ApiResponse response = await request.makeCall();
    return response;
  }

  Future<ApiResponse> put({required String endpoint, Map? data}) async {
    final headers = await _getHeaders();
    ApiRequest request = ApiRequest(
      url: baseUrl + endpoint,
      requestType: RequestType.PUT,
      header: headers,
      body: jsonEncode(data),
    );
    ApiResponse response = await request.makeCall();
    return response;
  }
}
