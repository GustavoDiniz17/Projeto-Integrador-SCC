import 'package:flutter/material.dart';
import 'package:projeto_integrador/dados_mockup.dart';
import 'package:projeto_integrador/enums/categorias_chamado_enum.dart';
import 'package:projeto_integrador/models/tipo_chamado_model.dart';
import 'package:projeto_integrador/pages/cadastros/tipo_chamado/tipo_chamado_form.dart';
import 'package:projeto_integrador/themes/secundary_button_theme.dart';
import 'package:projeto_integrador/widgets/custom_button.dart';
import 'package:projeto_integrador/widgets/custom_datagrid.dart';
import 'package:projeto_integrador/widgets/custom_dialogs.dart';
import 'package:projeto_integrador/widgets/custom_drawer.dart';
import 'package:projeto_integrador/widgets/custom_dropdown.dart';
import 'package:projeto_integrador/widgets/custom_radio_button.dart';
import 'package:projeto_integrador/widgets/custom_scaffold.dart';
import 'package:projeto_integrador/widgets/custom_text_form_field.dart';

class TipoChamadoList extends StatefulWidget {
  const TipoChamadoList({super.key});

  @override
  State<TipoChamadoList> createState() => _TipoChamadoListState();
}

class _TipoChamadoListState extends State<TipoChamadoList> {
  Future<List<TipoChamadoModel>> fetchTiposChamado() async {
    if (descricaoController.text == '') {
      tipoChamadoLista = DadosMockup().listTiposChamado().where((
        tipoChamadoModel,
      ) {
        final categoria =
            tipoChamadoModel.categoriaChamado == categoriaChamadoSelecionado;

        return tipoChamadoModel.ativo == ativo && categoria;
      }).toList();
    }

    tipoChamadoLista = DadosMockup().listTiposChamado().where((
      tipoChamadoModel,
    ) {
      final descricao = tipoChamadoModel.descricao.toLowerCase().contains(
        descricaoController.text.toLowerCase(),
      );

      final categoria =
          tipoChamadoModel.categoriaChamado == categoriaChamadoSelecionado;

      return descricao && tipoChamadoModel.ativo == ativo && categoria;
    }).toList();

    return tipoChamadoLista;
  }

  List<TipoChamadoModel> tipoChamadoLista = [];

  CategoriasChamadoEnum categoriaChamadoSelecionado =
      CategoriasChamadoEnum.requisicao;

  TextEditingController descricaoController = TextEditingController();

  bool ativo = true;
  bool appIsLoading = false;

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      loading: appIsLoading,
      appBarIcon: Icon(Icons.abc),
      appBarPageName: Text('Tipos Chamado'),
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
                  initialValue: categoriaChamadoSelecionado.descricao,
                  items: CategoriasChamadoEnum.values.map((categoriaChamado) {
                    return DropdownMenuItem(
                      value: categoriaChamado.descricao,
                      child: Text(categoriaChamado.descricao),
                      onTap: () =>
                          categoriaChamadoSelecionado = categoriaChamado,
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
                    form: TipoChamadoForm(idTipoChamado: null),
                    height: 230,
                  ).then((value) => fetchTiposChamado());
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
                    fetchTiposChamado();
                  });

                  appIsLoading = false;
                  setState(() {});
                },
              ),
            ],
          ),
          CustomDatagrid(
            child: Row(
              children: const [
                Expanded(
                  flex: 1,
                  child: Text(
                    "Ações",
                    textAlign: TextAlign.center,
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                ),
                Expanded(
                  flex: 2,
                  child: Text(
                    "Categoria",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                ),
                Expanded(
                  flex: 3,
                  child: Text(
                    "Descrição",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                ),
                Expanded(
                  flex: 1,
                  child: Text(
                    "Ativo",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: ListView.separated(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: tipoChamadoLista.length,
              separatorBuilder: (_, _) => const SizedBox(height: 8),
              itemBuilder: (context, index) {
                final tipoChamado = tipoChamadoLista[index];

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
                              form: TipoChamadoForm(
                                idTipoChamado: tipoChamado.id,
                              ),
                              height: 230,
                            ).then((value) => fetchTiposChamado());
                          },
                        ),
                      ),
                      Expanded(
                        flex: 2,
                        child: Text(
                          tipoChamado.categoriaChamado.descricao,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 3,
                        child: Text(
                          tipoChamado.descricao,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 1,
                        child: Text(
                          tipoChamado.ativo ? "Sim" : "Não",
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
