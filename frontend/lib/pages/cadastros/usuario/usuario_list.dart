import 'package:flutter/material.dart';
import 'package:projeto_integrador/dados_mockup.dart';
import 'package:projeto_integrador/enums/cargos_enum.dart';
import 'package:projeto_integrador/models/departamento_model.dart';
import 'package:projeto_integrador/models/usuario_model.dart';
import 'package:projeto_integrador/pages/cadastros/usuario/usuario_form.dart';
import 'package:projeto_integrador/themes/secundary_button_theme.dart';
import 'package:projeto_integrador/widgets/custom_button.dart';
import 'package:projeto_integrador/widgets/custom_dialogs.dart';
import 'package:projeto_integrador/widgets/custom_drawer.dart';
import 'package:projeto_integrador/widgets/custom_dropdown.dart';
import 'package:projeto_integrador/widgets/custom_radio_button.dart';
import 'package:projeto_integrador/widgets/custom_scaffold.dart';
import 'package:projeto_integrador/widgets/custom_text_form_field.dart';

class UsuarioList extends StatefulWidget {
  const UsuarioList({super.key});

  @override
  State<UsuarioList> createState() => _UsuarioListState();
}

class _UsuarioListState extends State<UsuarioList> {
  Future<List<UsuarioModel>> fetchUsuarios() async {
    if (descricaoController.text == '') {
      usuarioLista = DadosMockup().listUsuarios().where((usuarioModel) {
        final cargo = usuarioModel.cargo == cargoSelecionado;

        final departamento =
            usuarioModel.departamento?.id == departamentoSelecionado.id;

        return usuarioModel.ativo == ativo && cargo && departamento;
      }).toList();
    }

    usuarioLista = DadosMockup().listUsuarios().where((usuarioModel) {
      final nome = usuarioModel.nome.toLowerCase().contains(
        descricaoController.text.toLowerCase(),
      );
      final cargo = usuarioModel.cargo == cargoSelecionado;

      final departamento =
          usuarioModel.departamento?.id == departamentoSelecionado.id;

      return nome && usuarioModel.ativo == ativo && cargo && departamento;
    }).toList();

    return usuarioLista;
  }

  Future<List<DepartamentoModel>> fetchDepartamentos() async {
    return departamentosList = DadosMockup().listDepartamentos().where((
      departamentoModel,
    ) {
      return departamentoModel.ativo == true;
    }).toList();
  }

  List<DepartamentoModel> departamentosList = [];
  DepartamentoModel departamentoSelecionado = DepartamentoModel(
    id: '2',
    descricao: 'Tecnologia da Informação',
    abreviacao: 'TI',
    ativo: true,
  );

  List<UsuarioModel> usuarioLista = [];

  CargosEnum cargoSelecionado = CargosEnum.estagiario;

  TextEditingController descricaoController = TextEditingController();

  bool ativo = true;
  bool appIsLoading = false;

  @override
  void initState() {
    fetchDepartamentos();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      loading: appIsLoading,
      appBarIcon: Icon(Icons.abc),
      appBarPageName: Text('Usuários'),
      drawer: const CustomDrawer(),
      body: ListView(
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Flexible(
                flex: 1,
                child: CustomDropdown(
                  labelText: "Departamento",
                  prefixIcon: Icons.list_alt_outlined,
                  initialValue: departamentoSelecionado.descricao,
                  items: departamentosList.map((departamento) {
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
                flex: 1,
                child: CustomDropdown(
                  labelText: "Cargo",
                  prefixIcon: Icons.list_alt_outlined,
                  initialValue: cargoSelecionado.descricao,
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
                flex: 3,
                child: CustomTextFormField(
                  labelText: 'Nome',
                  controller: descricaoController,
                ),
              ),
              Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text('Ativo', style: TextStyle(color: Colors.black)),
                  Flexible(
                    child: CustomRadioButton(
                      selectedItemValue: ativo,
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
                        ativo = value;
                        setState(() {});
                      },
                    ),
                  ),
                ],
              ),
            ],
          ),
          Wrap(
            children: [
              CustomButton(
                icon: const Icon(Icons.add),
                label: const Text('Novo'),
                backgroundColor: Theme.of(
                  context,
                ).extension<SecundaryButtonTheme>()?.newButtonColor,
                onPressed: () {
                  CustomDialogs.buildFormDialog(
                    context: context,
                    form: UsuarioForm(idUsuario: null),
                    height: 280,
                  ).then((value) => fetchUsuarios());
                },
              ),
              CustomButton(
                label: const Text('Buscar'),
                icon: const Icon(Icons.search),
                backgroundColor: Theme.of(
                  context,
                ).extension<SecundaryButtonTheme>()?.filterButtonColor,
                onPressed: () async {
                  appIsLoading = true;
                  setState(() {});

                  await Future.delayed(const Duration(seconds: 1), () {
                    fetchUsuarios();
                  });

                  appIsLoading = false;
                  setState(() {});
                },
              ),
            ],
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
              decoration: BoxDecoration(
                color: Color(0xFF6750A4),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Row(
                children: const [
                  Expanded(
                    flex: 1,
                    child: Text(
                      "Ações",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                      ),
                    ),
                  ),
                  Expanded(
                    flex: 1,
                    child: Text(
                      "Cargo",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                      ),
                    ),
                  ),
                  Expanded(
                    flex: 2,
                    child: Text(
                      "Nome",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                      ),
                    ),
                  ),
                  Expanded(
                    flex: 2,
                    child: Text(
                      "E-mail",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                      ),
                    ),
                  ),
                  Expanded(
                    flex: 1,
                    child: Text(
                      "Ativo",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 8),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: ListView.separated(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: usuarioLista.length,
              separatorBuilder: (_, _) => const SizedBox(height: 8),
              itemBuilder: (context, index) {
                final usuario = usuarioLista[index];

                return Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 12,
                    vertical: 10,
                  ),
                  decoration: BoxDecoration(
                    color: Colors.grey.shade100,
                    borderRadius: BorderRadius.circular(8),
                    border: Border.all(color: Colors.grey.shade300),
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        flex: 1,
                        child: IconButton(
                          icon: const Icon(
                            Icons.edit_outlined,
                            color: Color(0xFF6750A4),
                          ),
                          tooltip: "Editar",
                          onPressed: () {
                            CustomDialogs.buildFormDialog(
                              context: context,
                              form: UsuarioForm(idUsuario: usuario.id),
                              height: 280,
                            ).then((value) => fetchUsuarios());
                          },
                        ),
                      ),
                      Expanded(
                        flex: 1,
                        child: Text(
                          usuario.cargo.descricao,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 2,
                        child: Text(
                          usuario.nome,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 2,
                        child: Text(
                          usuario.email,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 1,
                        child: Text(
                          usuario.ativo ? "Sim" : "Não",
                          style: const TextStyle(
                            fontSize: 14,
                            color: Colors.black,
                          ),
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
