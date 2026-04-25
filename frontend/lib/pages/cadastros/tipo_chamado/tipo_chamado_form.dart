import 'package:flutter/material.dart';
import 'package:projeto_integrador/dados_mockup.dart';
import 'package:projeto_integrador/enums/categorias_chamado_enum.dart';
import 'package:projeto_integrador/models/tipo_chamado_model.dart';
import 'package:projeto_integrador/themes/secundary_button_theme.dart';
import 'package:projeto_integrador/widgets/custom_button.dart';
import 'package:projeto_integrador/widgets/custom_dropdown.dart';
import 'package:projeto_integrador/widgets/custom_radio_button.dart';
import 'package:projeto_integrador/widgets/custom_scaffold.dart';
import 'package:projeto_integrador/widgets/custom_text_form_field.dart';

class TipoChamadoForm extends StatefulWidget {
  final String? idTipoChamado;
  const TipoChamadoForm({this.idTipoChamado, super.key});

  @override
  State<TipoChamadoForm> createState() => _TipoChamadoFormState();
}

class _TipoChamadoFormState extends State<TipoChamadoForm> {
  Future<void> fetchTipoChamado() async {
    appIsLoading = true;
    setState(() {});

    if (widget.idTipoChamado != null) {
      tipoChamdo = DadosMockup().listTiposChamado().firstWhere(
        (model) => model.id == widget.idTipoChamado,
      );

      categoriaChamadoSelecionado = tipoChamdo.categoriaChamado;
    }

    appIsLoading = false;
    setState(() {});
  }

  TipoChamadoModel tipoChamdo = TipoChamadoModel();
  CategoriasChamadoEnum? categoriaChamadoSelecionado;

  bool appIsLoading = false;

  @override
  void initState() {
    fetchTipoChamado();
    super.initState();
  }

  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      resizeToAvoidBottomInset: false,
      appBarIcon: const Icon(Icons.abc),
      appBarPageName: const Text('Tipo Chamado'),
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
                  initialValue: categoriaChamadoSelecionado,
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
                flex: 2,
                child: CustomTextFormField(
                  labelText: 'Descrição',
                  controller: TextEditingController(text: ''),
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
                      selectedItemValue: tipoChamdo.ativo,
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
                        tipoChamdo.ativo = value;
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
