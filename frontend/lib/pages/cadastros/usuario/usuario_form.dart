import 'package:flutter/material.dart';
import 'package:projeto_integrador/dados_mockup.dart';
import 'package:projeto_integrador/enums/cargos_enum.dart';
import 'package:projeto_integrador/models/departamento_model.dart';
import 'package:projeto_integrador/models/usuario_model.dart';
import 'package:projeto_integrador/services/departamentos_service.dart';
import 'package:projeto_integrador/services/usuarios_service.dart';
import 'package:projeto_integrador/themes/secundary_button_theme.dart';
import 'package:projeto_integrador/widgets/custom_button.dart';
import 'package:projeto_integrador/widgets/custom_dropdown.dart';
import 'package:projeto_integrador/widgets/custom_radio_button.dart';
import 'package:projeto_integrador/widgets/custom_scaffold.dart';
import 'package:projeto_integrador/widgets/custom_text_form_field.dart';

class UsuarioForm extends StatefulWidget {
  final String? idUsuario;
  const UsuarioForm({this.idUsuario, super.key});

  @override
  State<UsuarioForm> createState() => _UsuarioFormState();
}

class _UsuarioFormState extends State<UsuarioForm> {
  Future<void> fetchDepartamentosBackEnd() async {
    appIsLoading = true;
    setState(() {});

    departamentos = await departamentosService.getDepartamentos({
      'ativo': true,
    });

    appIsLoading = false;
    setState(() {});
  }

  Future<List<DepartamentoModel>> fetchDepartamentos() async {
    return departamentos = DadosMockup().listDepartamentos().where((
      departamentoModel,
    ) {
      return departamentoModel.ativo == true;
    }).toList();
  }

  Future<void> fetchUsuarioBackEnd() async {
    appIsLoading = true;
    setState(() {});

    if (widget.idUsuario != null) {
      usuario = await usuariosService.getUsuarioId(widget.idUsuario!);
    }

    appIsLoading = false;
    setState(() {});
  }

  Future<void> fetchUsuario() async {
    appIsLoading = true;
    setState(() {});

    if (widget.idUsuario != null) {
      usuario = DadosMockup().listUsuarios().firstWhere(
        (model) => model.id == widget.idUsuario,
      );

      cargoSelecionado = usuario.cargo;
      departamentoSelecionado = usuario.departamento;
    }

    appIsLoading = false;
    setState(() {});
  }

  DepartamentosService departamentosService = DepartamentosService();
  List<DepartamentoModel> departamentos = [];
  DepartamentoModel? departamentoSelecionado;

  UsuariosService usuariosService = UsuariosService();
  UsuarioModel usuario = UsuarioModel();
  CargosEnum? cargoSelecionado;

  bool appIsLoading = false;
  bool mostrarSenha = false;

  @override
  void initState() {
    fetchUsuario();
    fetchDepartamentos();
    super.initState();
  }

  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      resizeToAvoidBottomInset: false,
      appBarIcon: const Icon(Icons.abc),
      appBarPageName: const Text('Usuário'),
      formKey: formKey,
      loading: appIsLoading,
      body: ListView(
        padding: const EdgeInsets.only(top: 5),
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Flexible(
                flex: 1,
                child: CustomDropdown(
                  labelText: "Departamento",
                  prefixIcon: Icons.list_alt_outlined,
                  initialValue: departamentoSelecionado?.descricao,
                  items: departamentos.map((departamento) {
                    return DropdownMenuItem(
                      value: departamento.descricao,
                      child: Text(departamento.descricao),
                      onTap: () => departamentoSelecionado = departamento,
                    );
                  }).toList(),
                  onChanged: (data) {},
                ),
              ),
              Flexible(
                flex: 3,
                child: CustomTextFormField(
                  labelText: 'Nome',
                  controller: TextEditingController(text: usuario.nome),
                  validator: (data) =>
                      data == null || data == '' ? 'Campo obrigatório' : null,
                  onChanged: (data) => usuario.nome = data,
                ),
              ),
              Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text('Ativo', style: TextStyle(color: Colors.black)),
                  Flexible(
                    flex: 1,
                    child: CustomRadioButton(
                      selectedItemValue: usuario.ativo,
                      itens: [
                        CustomRadioButtonItem(
                          value: true,
                          display: const Text('Sim'),
                        ),
                        CustomRadioButtonItem(
                          value: false,
                          display: const Text('Não'),
                        ),
                      ],
                      direction: Axis.horizontal,
                      onChanged: (index, value) {
                        usuario.ativo = value;
                        setState(() {});
                      },
                    ),
                  ),
                ],
              ),
            ],
          ),
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Flexible(
                flex: 1,
                child: CustomDropdown(
                  labelText: "Cargo",
                  prefixIcon: Icons.list_alt_outlined,
                  initialValue: cargoSelecionado?.descricao,
                  items: CargosEnum.values.map((cargo) {
                    return DropdownMenuItem(
                      value: cargo.descricao,
                      child: Text(cargo.descricao),
                      onTap: () => cargoSelecionado = cargo,
                    );
                  }).toList(),
                  onChanged: (data) {},
                ),
              ),
              Flexible(
                flex: 2,
                child: CustomTextFormField(
                  labelText: 'E-mail',
                  controller: TextEditingController(text: usuario.email),
                  validator: (data) =>
                      data == null || data == '' ? 'Campo obrigatório' : null,
                  onChanged: (data) => usuario.email = data,
                ),
              ),
              Flexible(
                flex: 1,
                child: CustomTextFormField(
                  labelText: 'Senha',
                  obscureText: !mostrarSenha,
                  suffixIcon: IconButton(
                    icon: Icon(
                      color: Color(0xFF6750A4),
                      mostrarSenha
                          ? Icons.visibility_off_outlined
                          : Icons.visibility_outlined,
                    ),
                    onPressed: () {
                      setState(() {
                        mostrarSenha = !mostrarSenha;
                      });
                    },
                  ),
                  controller: TextEditingController(text: usuario.senha),
                  validator: (data) =>
                      data == null || data == '' ? 'Campo obrigatório' : null,
                  onChanged: (data) => usuario.senha = data,
                ),
              ),
            ],
          ),
        ],
      ),
      persistentFooterButtons: [
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CustomButton(
              icon: const Icon(Icons.save_outlined),
              label: const Text('Salvar'),
              backgroundColor: Theme.of(
                context,
              ).extension<SecundaryButtonTheme>()?.newButtonColor,
              onPressed: () {},
            ),
            CustomButton(
              icon: const Icon(Icons.cancel_outlined),
              label: const Text('Cancelar'),
              backgroundColor: Theme.of(
                context,
              ).extension<SecundaryButtonTheme>()?.cancelButtonColor,
              onPressed: () => Navigator.pop(context),
            ),
          ],
        ),
      ],
    );
  }
}
