import 'package:flutter/material.dart';
import 'package:projeto_integrador/routes.dart';

class CustomDrawer extends StatelessWidget {
  const CustomDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.zero),
      child: Column(
        children: [
          DrawerHeader(
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.primaryContainer,
            ),
            child: Row(
              children: [
                CircleAvatar(
                  radius: 30,
                  backgroundColor: Theme.of(context).colorScheme.primary,
                  child: const Icon(
                    Icons.person_outline,
                    size: 36,
                    color: Colors.white,
                  ),
                ),
                const SizedBox(width: 16),
                const Text(
                  "Bem-vindo!",
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.w600),
                ),
              ],
            ),
          ),
          ListTile(
            leading: const Icon(Icons.home_outlined),
            title: const Text("Início"),
            onTap: () => Navigator.pushNamed(context, PageRoutes.home),
          ),
          ExpansionTile(
            leading: const Icon(Icons.folder_open_outlined),
            title: const Text("Cadastros"),
            childrenPadding: const EdgeInsets.only(left: 32),
            children: [
              ListTile(
                leading: const Icon(Icons.abc),
                title: const Text("Cadastrar Departamento"),
                onTap: () =>
                    Navigator.pushNamed(context, PageRoutes.departamentoList),
              ),
              ListTile(
                leading: const Icon(Icons.abc),
                title: const Text("Cadastrar Problema"),
                onTap: () =>
                    Navigator.pushNamed(context, PageRoutes.problemaList),
              ),
              ListTile(
                leading: const Icon(Icons.abc),
                title: const Text("Cadastrar Tipo Chamado"),
                onTap: () =>
                    Navigator.pushNamed(context, PageRoutes.tipoChamadoList),
              ),
              ListTile(
                leading: const Icon(Icons.abc),
                title: const Text("Cadastrar Status"),
                onTap: () =>
                    Navigator.pushNamed(context, PageRoutes.statusList),
              ),
              ListTile(
                leading: const Icon(Icons.abc),
                title: const Text("Cadastrar Usuário"),
                onTap: () =>
                    Navigator.pushNamed(context, PageRoutes.usuarioList),
              ),
            ],
          ),
          /*ListTile(
            leading: const Icon(Icons.abc),
            title: const Text("Configurações"),
            onTap: () {
              Navigator.pop(context);
            },
          ),*/
          ListTile(
            leading: const Icon(Icons.abc),
            title: const Text("Dashboard"),
            onTap: () {
              Navigator.pushNamed(context, PageRoutes.dashboard);
            },
          ),
          ListTile(
            leading: const Icon(Icons.abc),
            title: const Text("Sair"),
            onTap: () {
              Navigator.pushNamed(context, PageRoutes.login);
              ScaffoldMessenger.of(
                context,
              ).showSnackBar(const SnackBar(content: Text("Logout realizado")));
            },
          ),
        ],
      ),
    );
  }
}
