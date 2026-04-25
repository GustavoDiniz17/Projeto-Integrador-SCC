enum CategoriasProblemaEnum { infra, sistema }

extension CategoriasProblemaEnumExtensions on CategoriasProblemaEnum {
  String get descricao {
    switch (this) {
      case CategoriasProblemaEnum.infra:
        return 'Infra';
      case CategoriasProblemaEnum.sistema:
        return 'Sistema';
    }
  }

  String get codigo {
    switch (this) {
      case CategoriasProblemaEnum.infra:
        return '1';
      case CategoriasProblemaEnum.sistema:
        return '2';
    }
  }
}
