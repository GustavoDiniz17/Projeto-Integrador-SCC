import 'package:flutter/material.dart';
import 'package:projeto_integrador/dados_mockup.dart';
import 'package:projeto_integrador/models/status_model.dart';
import 'package:projeto_integrador/pages/cadastros/status/status_form.dart';
import 'package:projeto_integrador/services/status_service.dart';
import 'package:projeto_integrador/themes/secundary_button_theme.dart';
import 'package:projeto_integrador/widgets/custom_button.dart';
import 'package:projeto_integrador/widgets/custom_dialogs.dart';
import 'package:projeto_integrador/widgets/custom_drawer.dart';
import 'package:projeto_integrador/widgets/custom_radio_button.dart';
import 'package:projeto_integrador/widgets/custom_scaffold.dart';
import 'package:projeto_integrador/widgets/custom_text_form_field.dart';

class StatusList extends StatefulWidget {
  const StatusList({super.key});

  @override
  State<StatusList> createState() => _StatusListState();
}

class _StatusListState extends State<StatusList> {
  Map<String, dynamic> buildFilters() {
    Map<String, dynamic> filters = {};
    if (descricaoController.text != '') {
      filters.addAll({
        "descricao[like]": descricaoController.text,
        "ativo": ativo,
      });
    }
    /*filters.addAll({'limit': limitGrid, 'offset': offsetGrid});*/
    return filters;
  }

  Future<void> fetchStatusBackEnd() async {
    appIsLoading = true;
    setState(() {});

    statusList = await statusService.getStatus(buildFilters());

    appIsLoading = false;
    setState(() {});
  }

  Future<List<StatusModel>> fetchStatus() async {
    if (descricaoController.text == '') {
      statusList = DadosMockup().listStatus().where((statusModel) {
        return statusModel.ativo == ativo;
      }).toList();
    }

    statusList = DadosMockup().listStatus().where((statusModel) {
      final descricao = statusModel.descricao.toLowerCase().contains(
        descricaoController.text.toLowerCase(),
      );

      return descricao && statusModel.ativo == ativo;
    }).toList();

    return statusList;
  }

  StatusService statusService = StatusService();

  List<StatusModel> statusList = [];

  TextEditingController descricaoController = TextEditingController();

  bool ativo = true;
  bool appIsLoading = false;

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      loading: appIsLoading,
      appBarIcon: Icon(Icons.abc),
      appBarPageName: Text('Status'),
      drawer: const CustomDrawer(),
      body: ListView(
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
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
                    form: StatusForm(idStatus: null),
                    height: 230,
                  ).then((value) => fetchStatus());
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
                    fetchStatus();
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
                    child: Center(
                      child: Text(
                        "Ações",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        ),
                      ),
                    ),
                  ),
                  Expanded(
                    flex: 4,
                    child: Text(
                      "Descrição",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                      ),
                    ),
                  ),
                  Expanded(
                    flex: 2,
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
              itemCount: statusList.length,
              separatorBuilder: (_, _) => const SizedBox(height: 8),
              itemBuilder: (context, index) {
                final status = statusList[index];

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
                              form: StatusForm(idStatus: status.id),
                              height: 230,
                            ).then((value) => fetchStatus());
                          },
                        ),
                      ),
                      Expanded(
                        flex: 4,
                        child: Text(
                          status.descricao,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 2,
                        child: Text(
                          status.ativo ? "Sim" : "Não",
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
