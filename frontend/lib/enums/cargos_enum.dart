enum CargosEnum { estagiario, junior, pleno, gerente }

extension CargosEnumExtensions on CargosEnum {
  String get descricao {
    switch (this) {
      case CargosEnum.estagiario:
        return 'Estagiário';
      case CargosEnum.junior:
        return 'Júnior';
      case CargosEnum.pleno:
        return 'Pleno';
      case CargosEnum.gerente:
        return 'Gerente';
    }
  }

  String get codigo {
    switch (this) {
      case CargosEnum.estagiario:
        return '1';
      case CargosEnum.junior:
        return '2';
      case CargosEnum.pleno:
        return '3';
      case CargosEnum.gerente:
        return '4';
    }
  }
}
