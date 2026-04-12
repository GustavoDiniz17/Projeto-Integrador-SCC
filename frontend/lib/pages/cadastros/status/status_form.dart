import 'package:flutter/material.dart';
import 'package:projeto_integrador/dados_mockup.dart';
import 'package:projeto_integrador/models/status_model.dart';
import 'package:projeto_integrador/services/status_service.dart';
import 'package:projeto_integrador/themes/secundary_button_theme.dart';
import 'package:projeto_integrador/widgets/custom_button.dart';
import 'package:projeto_integrador/widgets/custom_radio_button.dart';
import 'package:projeto_integrador/widgets/custom_scaffold.dart';
import 'package:projeto_integrador/widgets/custom_text_form_field.dart';

class StatusForm extends StatefulWidget {
  final String? idStatus;

  const StatusForm({this.idStatus, super.key});

  @override
  State<StatusForm> createState() => _StatusFormState();
}

class _StatusFormState extends State<StatusForm> {
  Future<void> fetchStatusBackEnd() async {
    appIsLoading = true;
    setState(() {});

    if (widget.idStatus != null) {
      status = await statusService.getStatusId(widget.idStatus!);
    }

    appIsLoading = false;
    setState(() {});
  }

  Future<void> fetchStatus() async {
    appIsLoading = true;
    setState(() {});

    if (widget.idStatus != null) {
      status = DadosMockup().listStatus().firstWhere(
        (model) => model.id == widget.idStatus,
      );
    }

    appIsLoading = false;
    setState(() {});
  }

  StatusService statusService = StatusService();
  StatusModel status = StatusModel();

  bool appIsLoading = false;

  @override
  void initState() {
    fetchStatus();
    super.initState();
  }

  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      resizeToAvoidBottomInset: false,
      appBarIcon: Icon(Icons.abc),
      appBarPageName: Text('Status'),
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
                  controller: TextEditingController(text: status.descricao),
                  validator: (data) =>
                      data == null || data == '' ? 'Campo obrigatório' : null,
                  onChanged: (data) {},
                ),
              ),
              Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text('Ativo', style: TextStyle(color: Colors.black)),
                  Flexible(
                    child: CustomRadioButton(
                      selectedItemValue: status.ativo,
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
                        status.ativo = value;
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
