enum CriticidadesEnum { normal, critico, urgente }

extension CriticidadesEnumExtensions on CriticidadesEnum {
  String get descricao {
    switch (this) {
      case CriticidadesEnum.normal:
        return 'Normal';
      case CriticidadesEnum.critico:
        return 'Crítico';
      case CriticidadesEnum.urgente:
        return 'Urgente';
    }
  }

  String get codigo {
    switch (this) {
      case CriticidadesEnum.normal:
        return '1';
      case CriticidadesEnum.critico:
        return '2';
      case CriticidadesEnum.urgente:
        return '3';
    }
  }
}
