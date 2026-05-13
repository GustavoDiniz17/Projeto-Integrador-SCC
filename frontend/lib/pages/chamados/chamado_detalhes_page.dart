import 'package:flutter/material.dart';
import 'package:projeto_integrador/dados_mockup.dart';
import 'package:projeto_integrador/enums/categorias_chamado_enum.dart';
import 'package:projeto_integrador/enums/categorias_problema_enum.dart';
import 'package:projeto_integrador/enums/criticidades_enum.dart';
import 'package:projeto_integrador/models/chamado_model.dart';
import 'package:projeto_integrador/models/problema_model.dart';
import 'package:projeto_integrador/models/status_model.dart';
import 'package:projeto_integrador/models/tipo_chamado_model.dart';
import 'package:projeto_integrador/services/chamados_service.dart';
import 'package:projeto_integrador/services/status_service.dart';
import 'package:projeto_integrador/themes/secundary_button_theme.dart';
import 'package:projeto_integrador/widgets/custom_button.dart';
import 'package:projeto_integrador/widgets/custom_dropdown.dart';
import 'package:projeto_integrador/widgets/custom_scaffold.dart';
import 'package:projeto_integrador/widgets/custom_text_form_field.dart';

// TODO Revisar tela, ideia das combos se alimentarem e também a cor dos textos, alterei diretamente no theme

class ChamadoDetalhesPage extends StatefulWidget {
  final String? idChamado;
  const ChamadoDetalhesPage({this.idChamado, super.key});

  @override
  State<ChamadoDetalhesPage> createState() => _ChamadoDetalhesPageState();
}

class _ChamadoDetalhesPageState extends State<ChamadoDetalhesPage> {
  Future<void> realizaFetchs() async {
    appIsLoading = true;
    setState(() {});

    await fetchChamado();
    await fetchStatus();
    await fetchProblemas();
    await fetchTiposChamado();

    appIsLoading = false;
    setState(() {});
  }

  Future<List<StatusModel>> fetchStatus() async {
    final status = await statusService.getStatus();
    return statusList = status.where((statusModel) {
      return statusModel.ativo == true;
    }).toList();
  }

  Future<List<ProblemaModel>> fetchProblemas() async {
    problemasLista = DadosMockup().listProblemas().where((problemaModel) {
      final categoria =
          problemaModel.categoriaProblema == categoriaProblemaSelecionado;

      return problemaModel.ativo == true && categoria;
    }).toList();

    return problemasLista;
  }

  Future<List<TipoChamadoModel>> fetchTiposChamado() async {
    tipoChamadoLista = DadosMockup().listTiposChamado().where((
      tipoChamadoModel,
    ) {
      final categoria =
          tipoChamadoModel.categoriaChamado == categoriaChamadoSelecionado;

      return tipoChamadoModel.ativo == true && categoria;
    }).toList();

    return tipoChamadoLista;
  }

  Future<void> fetchChamado() async {
    appIsLoading = true;
    setState(() {});

    if (widget.idChamado != null) {
      chamado = await chamadosService.getChamadoId(widget.idChamado!);

      statusSelecionado = chamado.status;
      criticidadeSelecionada = chamado.criticidade;
      problemaSelecionado = chamado.problema;
      tipoChamadoSelecionado = chamado.tipoChamado;
      categoriaProblemaSelecionado =
          problemaSelecionado?.categoriaProblema ??
          categoriaProblemaSelecionado;
      categoriaChamadoSelecionado =
          tipoChamadoSelecionado?.categoriaChamado ??
          categoriaChamadoSelecionado;
    }

    appIsLoading = false;
    setState(() {});
  }

  List<TipoChamadoModel> tipoChamadoLista = [];
  TipoChamadoModel? tipoChamadoSelecionado;
  CategoriasChamadoEnum categoriaChamadoSelecionado =
      CategoriasChamadoEnum.requisicao;

  List<ProblemaModel> problemasLista = [];
  ProblemaModel? problemaSelecionado;
  CategoriasProblemaEnum categoriaProblemaSelecionado =
      CategoriasProblemaEnum.infra;

  List<StatusModel> statusList = [];
  StatusModel? statusSelecionado;

  final ChamadosService chamadosService = ChamadosService();
  final StatusService statusService = StatusService();
  ChamadoModel chamado = ChamadoModel();

  CriticidadesEnum criticidadeSelecionada = CriticidadesEnum.normal;

  bool appIsLoading = false;

  final formKey = GlobalKey<FormState>();

  TextEditingController apontamentoController = TextEditingController();

  @override
  void initState() {
    realizaFetchs();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      resizeToAvoidBottomInset: false,
      appBarIcon: const Icon(Icons.abc),
      appBarPageName: const Text('Chamado'),
      formKey: formKey,
      loading: appIsLoading,
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Card(
              elevation: 2,
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Assunto',
                      style: TextStyle(
                        color: Colors.black,
                        fontWeight: FontWeight.bold,
                        fontSize: 18,
                      ),
                    ),
                    Text(chamado.assunto, style: TextStyle(fontSize: 16)),
                    const Divider(),
                    Text(
                      'Status',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 18,
                      ),
                    ),
                    Text(
                      chamado.status?.descricao ?? 'Sem status',
                      style: TextStyle(fontSize: 16),
                    ),
                    const Divider(),
                    Text(
                      'Solicitante',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 18,
                      ),
                    ),
                    Text(
                      chamado.tecnico?.nome ?? chamado.email,
                      style: TextStyle(fontSize: 16),
                    ),
                    const Divider(),
                    Text(
                      'Descrição',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 18,
                      ),
                    ),
                    Text(chamado.descricao, style: TextStyle(fontSize: 16)),
                    const Divider(),
                    const SizedBox(height: 16),
                    Row(
                      children: [
                        Flexible(
                          flex: 1,
                          child: CustomDropdown(
                            labelText: "Categoria Chamado",
                            prefixIcon: Icons.list_alt_outlined,
                            initialValue: categoriaChamadoSelecionado.descricao,
                            items: CategoriasChamadoEnum.values.map((
                              categoriaChamado,
                            ) {
                              return DropdownMenuItem(
                                value: categoriaChamado.descricao,
                                child: Text(categoriaChamado.descricao),
                                onTap: () {
                                  categoriaChamadoSelecionado =
                                      categoriaChamado;

                                  fetchTiposChamado();
                                  setState(() {});
                                },
                              );
                            }).toList(),
                            onChanged: (data) {},
                          ),
                        ),
                        Flexible(
                          flex: 1,
                          child: CustomDropdown(
                            labelText: "Tipo Chamado",
                            prefixIcon: Icons.list_alt_outlined,
                            items: tipoChamadoLista.map((tipoChamado) {
                              return DropdownMenuItem(
                                value: tipoChamado.descricao,
                                child: Text(tipoChamado.descricao),
                                onTap: () =>
                                    tipoChamadoSelecionado = tipoChamado,
                              );
                            }).toList(),
                            onChanged: (data) {},
                          ),
                        ),
                        Flexible(
                          flex: 1,
                          child: CustomDropdown(
                            labelText: "Categoria Problema",
                            prefixIcon: Icons.list_alt_outlined,
                            initialValue:
                                categoriaProblemaSelecionado.descricao,
                            items: CategoriasProblemaEnum.values.map((
                              categoriaProblema,
                            ) {
                              return DropdownMenuItem(
                                value: categoriaProblema.descricao,
                                child: Text(categoriaProblema.descricao),
                                onTap: () {
                                  categoriaProblemaSelecionado =
                                      categoriaProblema;

                                  fetchProblemas();
                                  setState(() {});
                                },
                              );
                            }).toList(),
                            onChanged: (data) {},
                          ),
                        ),
                        Flexible(
                          flex: 1,
                          child: CustomDropdown(
                            labelText: "Problema",
                            prefixIcon: Icons.list_alt_outlined,
                            items: problemasLista.map((problema) {
                              return DropdownMenuItem(
                                value: problema.descricao,
                                child: Text(problema.descricao),
                                onTap: () => problemaSelecionado = problema,
                              );
                            }).toList(),
                            onChanged: (data) {},
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),
            Padding(
              padding: const EdgeInsets.only(left: 8.0),
              child: Text(
                'Apontamentos',
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
              ),
            ),
            chamado.interacoesChamado == null
                ? SizedBox.shrink()
                : ListView.separated(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    itemCount: chamado.interacoesChamado!.length,
                    separatorBuilder: (_, _) => const SizedBox(height: 8),
                    itemBuilder: (context, index) {
                      final interacao = chamado.interacoesChamado![index];

                      return Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Card(
                          margin: EdgeInsets.zero,
                          elevation: 1,
                          child: Padding(
                            padding: const EdgeInsets.all(12.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      interacao.tecnico!.nome,
                                      style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 14,
                                        color: Color(0xFF6750A4),
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 8),
                                Text(interacao.descricao),
                              ],
                            ),
                          ),
                        ),
                      );
                    },
                  ),
            CustomTextFormField(
              labelText: 'Adicionar novo apontamento',
              controller: apontamentoController,
              suffixIcon: IconButton(
                icon: Icon(Icons.send, color: Theme.of(context).primaryColor),
                onPressed: () {
                  // Lógica para enviar apontamento
                },
              ),
            ),
          ],
        ),
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
