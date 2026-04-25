import 'package:flutter/material.dart';
import 'package:projeto_integrador/pages/chamados/chamado_detalhes_page.dart';
import 'package:projeto_integrador/pages/cadastros/departamento/departamento_form.dart';
import 'package:projeto_integrador/pages/cadastros/departamento/departamento_list.dart';
import 'package:projeto_integrador/pages/cadastros/problema/problema_form.dart';
import 'package:projeto_integrador/pages/cadastros/problema/problema_list.dart';
import 'package:projeto_integrador/pages/cadastros/status/status_form.dart';
import 'package:projeto_integrador/pages/cadastros/status/status_list.dart';

import 'package:projeto_integrador/pages/chamados/home.dart';
import 'package:projeto_integrador/pages/cadastros/tipo_chamado/tipo_chamado_form.dart';
import 'package:projeto_integrador/pages/cadastros/tipo_chamado/tipo_chamado_list.dart';
import 'package:projeto_integrador/pages/cadastros/usuario/usuario_form.dart';
import 'package:projeto_integrador/pages/cadastros/usuario/usuario_list.dart';
import 'package:projeto_integrador/pages/dashboard_page.dart';
import 'package:projeto_integrador/pages/login.dart';

class PageRoutes {
  static const String login = '/login';

  static const String dashboard = '/dashboard';

  static const String home = '/home';
  static const String chamadoDetalhes = '/chamadoDetalhes';

  static const String statusList = '/statusList';
  static const String statusForm = '/statusForm';

  static const String problemaList = '/problemaList';
  static const String problemaForm = '/problemaForm';

  static const String tipoChamadoList = '/tipoChamadoList';
  static const String tipoChamadoForm = '/tipoChamadoForm';

  static const String departamentoList = '/departamentoList';
  static const String departamentoForm = '/departamentoForm';

  static const String usuarioList = '/usuarioList';
  static const String usuarioForm = '/usuarioForm';

  static MaterialPageRoute buildRoute(RouteSettings settings) {
    String name = settings.name ?? '';
    Uri uri = Uri.parse(name);
    dynamic args = uri.queryParameters;

    args = args.isEmpty ? settings.arguments ?? {} : args;

    switch (uri.path) {
      case login:
        return MaterialPageRoute(
          builder: (context) => const Login(),
          settings: settings,
        );

      case dashboard:
        return MaterialPageRoute(
          builder: (context) => const DashboardPage(),
          settings: settings,
        );

      case home:
        return MaterialPageRoute(
          builder: (context) => Home(),
          settings: settings,
        );

      case chamadoDetalhes:
        return MaterialPageRoute(
          builder: (context) =>
              ChamadoDetalhesPage(idChamado: args['idChamado']),
          settings: settings,
        );

      case statusList:
        return MaterialPageRoute(
          builder: (context) => StatusList(),
          settings: settings,
        );

      case statusForm:
        return MaterialPageRoute(
          builder: (context) => StatusForm(),
          settings: settings,
        );

      case problemaList:
        return MaterialPageRoute(
          builder: (context) => ProblemaList(),
          settings: settings,
        );

      case problemaForm:
        return MaterialPageRoute(
          builder: (context) => ProblemaForm(idProblema: args['idProblema']),
          settings: settings,
        );

      case departamentoList:
        return MaterialPageRoute(
          builder: (context) => DepartamentoList(),
          settings: settings,
        );

      case departamentoForm:
        return MaterialPageRoute(
          builder: (context) =>
              DepartamentoForm(idDepartamento: args['idDepartamento']),
          settings: settings,
        );

      case tipoChamadoList:
        return MaterialPageRoute(
          builder: (context) => TipoChamadoList(),
          settings: settings,
        );

      case tipoChamadoForm:
        return MaterialPageRoute(
          builder: (context) =>
              TipoChamadoForm(idTipoChamado: args['idTipoChamado']),
          settings: settings,
        );

      case usuarioList:
        return MaterialPageRoute(
          builder: (context) => UsuarioList(),
          settings: settings,
        );

      case usuarioForm:
        return MaterialPageRoute(
          builder: (context) => UsuarioForm(idUsuario: args['idUsuario']),
          settings: settings,
        );

      default:
        return MaterialPageRoute(
          builder: (context) => const Login(),
          settings: settings,
        );
    }
  }
}
