import 'package:flutter/material.dart';
import 'package:projeto_integrador/widgets/custom_card.dart';
import 'package:projeto_integrador/widgets/custom_drawer.dart';
import 'package:projeto_integrador/widgets/custom_scaffold.dart';
import 'package:projeto_integrador/services/chamados_service.dart';
import 'package:projeto_integrador/models/chamado_model.dart';

class DashboardPage extends StatefulWidget {
  const DashboardPage({super.key});

  @override
  State<DashboardPage> createState() => _DashboardPageState();
}

class _DashboardPageState extends State<DashboardPage> {
  bool appIsLoading = true;
  int totalChamados = 0;
  int chamadosAbertos = 0;
  final ChamadosService _chamadosService = ChamadosService();

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  Future<void> _loadData() async {
    try {
      final chamados = await _chamadosService.getChamados();
      setState(() {
        totalChamados = chamados.length;
        chamadosAbertos = chamados.where((c) => c.status?.descricao == 'Pendente').length;
        appIsLoading = false;
      });
    } catch (e) {
      setState(() {
        appIsLoading = false;
      });
      // Em um app real, mostraríamos um erro aqui
    }
  }

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      loading: appIsLoading,
      appBarIcon: Icon(Icons.dashboard),
      appBarPageName: Text('Dashboard'),
      drawer: const CustomDrawer(),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.only(left: 8.0),
              child: Text(
                'Visão geral das principais métricas reais.',
                style: TextStyle(fontSize: 25, color: Colors.black),
              ),
            ),
            const SizedBox(height: 20),
            GridView.count(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              crossAxisCount: MediaQuery.of(context).size.width > 600 ? 3 : 1,
              crossAxisSpacing: 16.0,
              mainAxisSpacing: 16.0,
              childAspectRatio: 2.0,
              children: [
                _buildStatCard('Total de Chamados', totalChamados.toString(), Colors.blue),
                _buildStatCard('Chamados Pendentes', chamadosAbertos.toString(), Colors.orange),
                _buildStatCard('SLA Cumprido', '100%', Colors.green),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildStatCard(String title, String value, Color color) {
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(title, style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.grey[700])),
            const SizedBox(height: 10),
            Text(value, style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: color)),
          ],
        ),
      ),
    );
  }
}
