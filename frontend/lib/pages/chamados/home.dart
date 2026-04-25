import 'package:flutter/material.dart';
import 'package:projeto_integrador/dados_mockup.dart';
import 'package:projeto_integrador/enums/criticidades_enum.dart';
import 'package:projeto_integrador/models/chamado_model.dart';
import 'package:projeto_integrador/routes.dart';
import 'package:projeto_integrador/themes/secundary_button_theme.dart';
import 'package:projeto_integrador/widgets/custom_button.dart';
import 'package:projeto_integrador/widgets/custom_drawer.dart';
import 'package:projeto_integrador/widgets/custom_dropdown.dart';
import 'package:projeto_integrador/widgets/custom_scaffold.dart';
import 'package:projeto_integrador/widgets/custom_text_form_field.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  Future<List<ChamadoModel>> fetchChamados() async {
    if (assuntoController.text == '') {
      chamadosList = DadosMockup().listChamados().where((chamadoModel) {
        final criticidade = chamadoModel.criticidade == criticidadeSelecionada;

        return criticidade;
      }).toList();
    }

    return chamadosList;
  }

  List<ChamadoModel> chamadosList = [];

  CriticidadesEnum criticidadeSelecionada = CriticidadesEnum.normal;

  bool appIsLoading = false;

  TextEditingController assuntoController = TextEditingController();

  @override
  void initState() {
    fetchChamados();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      loading: appIsLoading,
      appBarIcon: Icon(Icons.abc),
      appBarPageName: Text('Página Principal'),
      drawer: const CustomDrawer(),
      body: ListView(
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Flexible(
                flex: 1,
                child: CustomDropdown(
                  labelText: "Criticidade",
                  prefixIcon: Icons.list_alt_outlined,
                  initialValue: criticidadeSelecionada.descricao,
                  items: CriticidadesEnum.values.map((criticidade) {
                    return DropdownMenuItem(
                      value: criticidade.descricao,
                      child: Text(criticidade.descricao),
                      onTap: () => criticidadeSelecionada = criticidade,
                    );
                  }).toList(),
                  onChanged: (data) {},
                ),
              ),
              Flexible(
                flex: 3,
                child: CustomTextFormField(
                  labelText: 'Assunto',
                  controller: assuntoController,
                ),
              ),
            ],
          ),
          Wrap(
            children: [
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
                    fetchChamados();
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
                      "Código",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                      ),
                    ),
                  ),
                  Expanded(
                    flex: 1,
                    child: Text(
                      "Criticidade",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                      ),
                    ),
                  ),
                  Expanded(
                    flex: 2,
                    child: Text(
                      "Assunto",
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
              itemCount: chamadosList.length,
              separatorBuilder: (_, _) => const SizedBox(height: 8),
              itemBuilder: (context, index) {
                final chamado = chamadosList[index];

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
                            Icons.visibility_outlined,
                            color: Color(0xFF6750A4),
                          ),
                          tooltip: "Visualizar",

                          onPressed: () => Navigator.pushNamed(
                            context,
                            PageRoutes.chamadoDetalhes,
                            arguments: {'idChamado': chamado.id},
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 1,
                        child: Text(
                          chamado.codigo,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 1,
                        child: Text(
                          chamado.criticidade.descricao,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 2,
                        child: Text(
                          chamado.assunto,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 2,
                        child: Text(
                          chamado.email,
                          style: const TextStyle(
                            fontSize: 15,
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
