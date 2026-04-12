import 'dart:convert';

import 'package:projeto_integrador/services/api/api_request.dart';
import 'package:projeto_integrador/services/api/api_response.dart';

class DevClient {
  bool isAuthRequired = true;

  String baseUrl = "http://localhost:3000/";

  Map<String, String> defaultHeaders = {};

  Future<ApiResponse> delete({required String endpoint, Map? filters}) async {
    /*if (isAuthRequired) await _addAuthHeader();*/

    ApiRequest request = ApiRequest(
      url: baseUrl + endpoint,
      requestType: RequestType.DELETE,
      header: defaultHeaders,
      params: filters,
    );

    ApiResponse response = await request.makeCall();

    return response;
  }

  Future<ApiResponse> get({
    required String endpoint,
    Map<String, dynamic>? filters,
  }) async {
    /*if (isAuthRequired) await _addAuthHeader();*/

    ApiRequest request = ApiRequest(
      url: baseUrl + endpoint,
      requestType: RequestType.GET,
      header: defaultHeaders,
      params: filters,
    );

    ApiResponse response = await request.makeCall();

    return response;
  }

  Future<ApiResponse> patch({required String endpoint, Map? data}) async {
    /*if (isAuthRequired) await _addAuthHeader();*/

    ApiRequest request = ApiRequest(
      url: baseUrl + endpoint,
      requestType: RequestType.PATCH,
      header: defaultHeaders,
      body: jsonEncode(data),
    );

    ApiResponse response = await request.makeCall();

    return response;
  }

  Future<ApiResponse> post({required String endpoint, Map? data}) async {
    /*if (isAuthRequired) await _addAuthHeader();*/
    defaultHeaders.putIfAbsent('Content-Type', () => 'application/json');

    ApiRequest request = ApiRequest(
      url: baseUrl + endpoint,
      requestType: RequestType.POST,
      header: defaultHeaders,
      body: jsonEncode(data),
    );

    ApiResponse response = await request.makeCall();

    return response;
  }

  Future<ApiResponse> put({required String endpoint, Map? data}) async {
    /*if (isAuthRequired) await _addAuthHeader();*/
    defaultHeaders.putIfAbsent('Content-Type', () => 'application/json');

    ApiRequest request = ApiRequest(
      url: baseUrl + endpoint,
      requestType: RequestType.PUT,
      header: defaultHeaders,
      body: jsonEncode(data),
    );

    ApiResponse response = await request.makeCall();

    return response;
  }

  /*
  Future<void> _addAuthHeader() async {
    UserPreferencesModel? usuario = await UserService().getUsuarioSessaoAsync();
    if (usuario == null) throw Exception('Acesso negado');

    bool isValid = _checkIfTokenIsValid(usuario.accessToken);
    if (isValid) {
      defaultHeaders['Authorization'] = "Bearer ${usuario.accessToken}";
    } else {
      await _refreshToken(usuario);
    }
  }

  bool _checkIfTokenIsValid(String token) {
    String jwtPayload = base64Url.normalize(token.split(".")[1]);
    dynamic decodedPayload = jsonDecode(
      utf8.decode(base64Url.decode(jwtPayload)),
    );
    DateTime expirationDate = DateTime.fromMillisecondsSinceEpoch(
      decodedPayload['exp'] * 1000,
    );

    if (DateTime.now().isBefore(expirationDate)) {
      return true;
    }

    return false;
  }

  Future<void> _refreshToken(UserPreferencesModel usuario) async {
    ApiRequest request = ApiRequest(
      url: '${baseUrl}auth/refresh',
      requestType: RequestType.POST,
      header: {'Authorization': "Bearer ${usuario.refreshToken}"},
    );

    ApiResponse response = await request.makeCall();

    if (response.statusCode == 401) throw const SessaoExpiradaException();

    usuario.accessToken = response.body['accessToken'];
    usuario.refreshToken = response.body['refreshToken'];

    SharedPreferences? prefs = await SharedPreferences.getInstance();
    await prefs.setString('usuario', jsonEncode(usuario.toJson()));

    defaultHeaders['Authorization'] = "Bearer ${usuario.accessToken}";
  }
  */
}
