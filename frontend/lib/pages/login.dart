import 'package:flutter/material.dart';
import 'package:projeto_integrador/routes.dart';
import 'package:projeto_integrador/widgets/custom_button.dart';
import 'package:projeto_integrador/widgets/custom_text_form_field.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  final TextEditingController _loginController = TextEditingController();
  final TextEditingController _senhaController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _assuntoController = TextEditingController();
  final TextEditingController _descricaoController = TextEditingController();

  bool _mostrarSenha = false;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Scaffold(
      backgroundColor: theme.colorScheme.surfaceContainerHighest,
      body: Center(
        child: Card(
          elevation: 6,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),
          child: SizedBox(
            width: 420,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TabBar(
                  splashBorderRadius: BorderRadius.only(
                    topLeft: Radius.circular(20),
                    topRight: Radius.circular(20),
                  ),
                  controller: _tabController,
                  labelColor: theme.colorScheme.primary,
                  unselectedLabelColor: theme.colorScheme.onSurfaceVariant,
                  indicatorColor: theme.colorScheme.primary,
                  tabs: const [
                    Tab(text: "Login", icon: Icon(Icons.lock_outline)),
                    Tab(text: "Criar Chamado", icon: Icon(Icons.support_agent)),
                  ],
                ),
                SizedBox(
                  height: 440,
                  child: TabBarView(
                    controller: _tabController,
                    children: [
                      // -------------------- ABA LOGIN --------------------
                      Padding(
                        padding: const EdgeInsets.all(20.0),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            CustomTextFormField(
                              controller: _loginController,
                              labelText: "Login",
                              prefixIcon: Icon(Icons.person_outline),
                            ),
                            const SizedBox(height: 16),
                            CustomTextFormField(
                              controller: _senhaController,
                              obscureText: !_mostrarSenha,
                              labelText: "Senha",
                              prefixIcon: const Icon(Icons.lock_outline),
                              suffixIcon: IconButton(
                                color: Color(0xFF6750A4),
                                icon: Icon(
                                  _mostrarSenha
                                      ? Icons.visibility_off_outlined
                                      : Icons.visibility_outlined,
                                ),
                                onPressed: () {
                                  setState(() {
                                    _mostrarSenha = !_mostrarSenha;
                                  });
                                },
                              ),
                            ),
                            const SizedBox(height: 24),
                            CustomButton(
                              width: double.infinity,
                              icon: const Icon(Icons.login),
                              label: const Text("Entrar"),
                              onPressed: () {
                                Navigator.pushNamed(context, PageRoutes.home);
                              },
                            ),
                          ],
                        ),
                      ),

                      // -------------------- ABA CRIAR CHAMADO --------------------
                      Padding(
                        padding: const EdgeInsets.all(20.0),
                        child: SingleChildScrollView(
                          child: Column(
                            children: [
                              TextField(
                                controller: _emailController,
                                decoration: const InputDecoration(
                                  labelText: "E-mail de contato",
                                  prefixIcon: Icon(Icons.email_outlined),
                                  border: OutlineInputBorder(),
                                ),
                              ),
                              const SizedBox(height: 12),
                              TextField(
                                controller: _assuntoController,
                                decoration: const InputDecoration(
                                  labelText: "Assunto",
                                  prefixIcon: Icon(Icons.subject_outlined),
                                  border: OutlineInputBorder(),
                                ),
                              ),
                              const SizedBox(height: 12),
                              TextField(
                                controller: _descricaoController,
                                maxLines: 4,
                                decoration: const InputDecoration(
                                  labelText: "Descrição detalhada",
                                  alignLabelWithHint: true,
                                  prefixIcon: Icon(Icons.description_outlined),
                                  border: OutlineInputBorder(),
                                ),
                              ),
                              const SizedBox(height: 20),
                              CustomButton(
                                width: double.infinity,
                                icon: const Icon(Icons.send_outlined),
                                label: const Text("Enviar Chamado"),
                                onPressed: () {},
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
