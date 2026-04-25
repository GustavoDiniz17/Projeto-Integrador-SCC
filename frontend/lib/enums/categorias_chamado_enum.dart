enum CategoriasChamadoEnum { requisicao, incidente }

extension CategoriasChamadoEnumExtensions on CategoriasChamadoEnum {
  String get descricao {
    switch (this) {
      case CategoriasChamadoEnum.requisicao:
        return 'Requisição';
      case CategoriasChamadoEnum.incidente:
        return 'Incidente';
    }
  }

  String get codigo {
    switch (this) {
      case CategoriasChamadoEnum.requisicao:
        return '1';
      case CategoriasChamadoEnum.incidente:
        return '2';
    }
  }
}
