import 'package:flutter/material.dart';
import 'package:projeto_integrador/dados_mockup.dart';
import 'package:projeto_integrador/enums/categorias_problema_enum.dart';
import 'package:projeto_integrador/models/problema_model.dart';
import 'package:projeto_integrador/services/problemas_service.dart';
import 'package:projeto_integrador/themes/secundary_button_theme.dart';
import 'package:projeto_integrador/widgets/custom_button.dart';
import 'package:projeto_integrador/widgets/custom_dropdown.dart';
import 'package:projeto_integrador/widgets/custom_radio_button.dart';
import 'package:projeto_integrador/widgets/custom_scaffold.dart';
import 'package:projeto_integrador/widgets/custom_text_form_field.dart';

class ProblemaForm extends StatefulWidget {
  final String? idProblema;

  const ProblemaForm({this.idProblema, super.key});

  @override
  State<ProblemaForm> createState() => _ProblemaFormState();
}

class _ProblemaFormState extends State<ProblemaForm> {
  Future<void> fetchProblemaBackEnd() async {
    appIsLoading = true;
    setState(() {});

    if (widget.idProblema != null) {
      problema = await problemasService.getProblemaId(widget.idProblema!);
    }

    appIsLoading = false;
    setState(() {});
  }

  Future<void> fetchProblema() async {
    appIsLoading = true;
    setState(() {});

    if (widget.idProblema != null) {
      problema = DadosMockup().listProblemas().firstWhere(
        (model) => model.id == widget.idProblema,
      );
    }

    appIsLoading = false;
    setState(() {});
  }

  ProblemasService problemasService = ProblemasService();
  ProblemaModel problema = ProblemaModel();

  bool appIsLoading = false;

  @override
  void initState() {
    fetchProblema();
    super.initState();
  }

  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      resizeToAvoidBottomInset: false,
      appBarIcon: const Icon(Icons.abc),
      appBarPageName: const Text('Problema'),
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
                  labelText: "Categoria",
                  prefixIcon: Icons.list_alt_outlined,
                  initialValue: problema.categoriaProblema.descricao,
                  items: CategoriasProblemaEnum.values.map((categoriaProblema) {
                    return DropdownMenuItem(
                      value: categoriaProblema.descricao,
                      child: Text(categoriaProblema.descricao),
                      onTap: () =>
                          problema.categoriaProblema = categoriaProblema,
                    );
                  }).toList(),
                  onChanged: (data) {},
                ),
              ),
              Flexible(
                flex: 3,
                child: CustomTextFormField(
                  labelText: 'Descrição',
                  controller: TextEditingController(text: problema.descricao),
                  validator: (data) =>
                      data == null || data == '' ? 'Campo obrigatório' : null,
                  onChanged: (data) {
                    problema.descricao = data;
                  },
                ),
              ),
              Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text('Ativo', style: TextStyle(color: Colors.black)),
                  Flexible(
                    child: CustomRadioButton(
                      selectedItemValue: problema.ativo,
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
                        problema.ativo = value;
                        setState(() {});
                      },
                    ),
                  ),
                ],
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
