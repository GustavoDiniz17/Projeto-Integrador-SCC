import 'package:flutter/material.dart';

class SecundaryButtonTheme extends ThemeExtension<SecundaryButtonTheme> {
  final Color filterButtonColor;
  final Color saveButtonColor;
  final Color newButtonColor;
  final Color cancelButtonColor;

  SecundaryButtonTheme({
    required this.filterButtonColor,
    required this.saveButtonColor,
    required this.newButtonColor,
    required this.cancelButtonColor,
  });

  @override
  SecundaryButtonTheme copyWith({
    Color? filterButtonColor,
    Color? saveButtonColor,
    Color? newButtonColor,
    Color? cancelButtonColor,
  }) => SecundaryButtonTheme(
    filterButtonColor: filterButtonColor ?? this.filterButtonColor,
    saveButtonColor: saveButtonColor ?? this.saveButtonColor,
    newButtonColor: newButtonColor ?? this.newButtonColor,
    cancelButtonColor: cancelButtonColor ?? this.cancelButtonColor,
  );

  @override
  SecundaryButtonTheme lerp(
    ThemeExtension<SecundaryButtonTheme>? other,
    double t,
  ) {
    if (other is SecundaryButtonTheme) {
      return this;
    }

    throw UnimplementedError();
  }
}
