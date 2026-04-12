import 'package:flutter/material.dart';
import 'package:projeto_integrador/dados_mockup.dart';
import 'package:projeto_integrador/enums/categorias_problema_enum.dart';
import 'package:projeto_integrador/models/problema_model.dart';
import 'package:projeto_integrador/pages/cadastros/problema/problema_form.dart';
import 'package:projeto_integrador/themes/secundary_button_theme.dart';
import 'package:projeto_integrador/widgets/custom_button.dart';
import 'package:projeto_integrador/widgets/custom_dialogs.dart';
import 'package:projeto_integrador/widgets/custom_drawer.dart';
import 'package:projeto_integrador/widgets/custom_dropdown.dart';
import 'package:projeto_integrador/widgets/custom_radio_button.dart';
import 'package:projeto_integrador/widgets/custom_scaffold.dart';
import 'package:projeto_integrador/widgets/custom_text_form_field.dart';

class ProblemaList extends StatefulWidget {
  const ProblemaList({super.key});

  @override
  State<ProblemaList> createState() => _ProblemaListState();
}

class _ProblemaListState extends State<ProblemaList> {
  Future<List<ProblemaModel>> fetchProblemas() async {
    if (descricaoController.text == '') {
      problemasLista = DadosMockup().listProblemas().where((problemaModel) {
        final categoria =
            problemaModel.categoriaProblema == categoriaProblemaSelecionado;

        return problemaModel.ativo == ativo && categoria;
      }).toList();
    }

    problemasLista = DadosMockup().listProblemas().where((problemaModel) {
      final descricao = problemaModel.descricao.toLowerCase().contains(
        descricaoController.text.toLowerCase(),
      );
      final categoria =
          problemaModel.categoriaProblema == categoriaProblemaSelecionado;

      return descricao && problemaModel.ativo == ativo && categoria;
    }).toList();

    return problemasLista;
  }

  List<ProblemaModel> problemasLista = [];

  CategoriasProblemaEnum categoriaProblemaSelecionado =
      CategoriasProblemaEnum.infra;

  TextEditingController descricaoController = TextEditingController();

  bool ativo = true;
  bool appIsLoading = false;

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      loading: appIsLoading,
      appBarIcon: Icon(Icons.abc),
      appBarPageName: Text('Problemas'),
      drawer: const CustomDrawer(),
      body: ListView(
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Flexible(
                flex: 1,
                child: CustomDropdown(
                  labelText: "Categoria",
                  prefixIcon: Icons.list_alt_outlined,
                  initialValue: categoriaProblemaSelecionado.descricao,
                  items: CategoriasProblemaEnum.values.map((categoriaProblema) {
                    return DropdownMenuItem(
                      value: categoriaProblema.descricao,
                      child: Text(categoriaProblema.descricao),
                      onTap: () =>
                          categoriaProblemaSelecionado = categoriaProblema,
                    );
                  }).toList(),
                  onChanged: (data) {},
                ),
              ),
              Flexible(
                flex: 3,
                child: CustomTextFormField(
                  labelText: 'Descrição',
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
                    form: ProblemaForm(idProblema: null),
                    height: 230,
                  ).then((value) => fetchProblemas());
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
                    fetchProblemas();
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
                    flex: 2,
                    child: Text(
                      "Categoria",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                      ),
                    ),
                  ),
                  Expanded(
                    flex: 3,
                    child: Text(
                      "Descrição",
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
              itemCount: problemasLista.length,
              separatorBuilder: (_, _) => const SizedBox(height: 8),
              itemBuilder: (context, index) {
                final problema = problemasLista[index];

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
                              form: ProblemaForm(idProblema: problema.id),
                              height: 230,
                            ).then((value) => fetchProblemas());
                          },
                        ),
                      ),
                      Expanded(
                        flex: 2,
                        child: Text(
                          problema.categoriaProblema.descricao,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 3,
                        child: Text(
                          problema.descricao,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 1,
                        child: Text(
                          problema.ativo ? "Sim" : "Não",
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
