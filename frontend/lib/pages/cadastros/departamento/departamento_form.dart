import 'package:flutter/material.dart';
import 'package:projeto_integrador/dados_mockup.dart';
import 'package:projeto_integrador/models/departamento_model.dart';
import 'package:projeto_integrador/services/departamentos_service.dart';
import 'package:projeto_integrador/themes/secundary_button_theme.dart';
import 'package:projeto_integrador/widgets/custom_button.dart';
import 'package:projeto_integrador/widgets/custom_radio_button.dart';
import 'package:projeto_integrador/widgets/custom_scaffold.dart';
import 'package:projeto_integrador/widgets/custom_text_form_field.dart';

class DepartamentoForm extends StatefulWidget {
  final String? idDepartamento;

  const DepartamentoForm({this.idDepartamento, super.key});

  @override
  State<DepartamentoForm> createState() => _DepartamentoFormState();
}

class _DepartamentoFormState extends State<DepartamentoForm> {
  Future<void> fetchDepartamentosBackEnd() async {
    appIsLoading = true;
    setState(() {});

    if (widget.idDepartamento != null) {
      departamento = await departamentoService.getDepartamentoId(
        widget.idDepartamento!,
      );
    }

    appIsLoading = false;
    setState(() {});
  }

  Future<void> fetchDepartamentos() async {
    appIsLoading = true;
    setState(() {});

    if (widget.idDepartamento != null) {
      departamento = DadosMockup().listDepartamentos().firstWhere(
        (model) => model.id == widget.idDepartamento,
      );
    }

    appIsLoading = false;
    setState(() {});
  }

  DepartamentosService departamentoService = DepartamentosService();
  DepartamentoModel departamento = DepartamentoModel();
  bool appIsLoading = false;

  @override
  void initState() {
    fetchDepartamentos();
    super.initState();
  }

  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      resizeToAvoidBottomInset: false,
      appBarIcon: const Icon(Icons.abc),
      appBarPageName: const Text('Departamento'),
      formKey: formKey,
      loading: appIsLoading,
      loadingText: 'Carregando informações, aguarde!',
      body: ListView(
        padding: const EdgeInsets.only(top: 5),
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Flexible(
                flex: 3,
                child: CustomTextFormField(
                  labelText: 'Descrição',
                  controller: TextEditingController(
                    text: departamento.descricao,
                  ),
                  validator: (data) =>
                      data == null || data == '' ? 'Campo obrigatório' : null,
                  onChanged: (data) {
                    departamento.descricao = data;
                  },
                ),
              ),
              Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text('Ativo', style: TextStyle(color: Colors.black)),
                  Flexible(
                    child: CustomRadioButton(
                      selectedItemValue: departamento.ativo,
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
                        departamento.ativo = value;
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
