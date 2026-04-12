import 'package:flutter/material.dart';
import 'package:projeto_integrador/themes/secundary_button_theme.dart';
import 'routes.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SCC',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        textTheme: const TextTheme(bodyMedium: TextStyle(color: Colors.white)),
        extensions: <ThemeExtension<dynamic>>{
          SecundaryButtonTheme(
            filterButtonColor: Color(0xFF6750A4),
            saveButtonColor: Colors.green,
            newButtonColor: Colors.green,
            cancelButtonColor: Colors.red,
          ),
        },
      ),
      onGenerateRoute: (settings) => PageRoutes.buildRoute(settings),
    );
  }
}
