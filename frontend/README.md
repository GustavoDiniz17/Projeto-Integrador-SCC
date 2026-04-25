# SCC - Sistema de Controle de Chamados 🚀

> **Projeto Integrador - Ciência de Dados e Inteligência Artificial** > Uma solução inteligente para automação de triagem e gestão de incidentes corporativos.

---

## 📝 Sobre o Projeto
O **SCC (Sistema de Controle de Chamados)** surgiu para resolver a ineficiência na triagem manual de suporte técnico. O projeto foca em transformar **dados não estruturados** (relatos de usuários) em decisões automatizadas.

Utilizando **Processamento de Linguagem Natural (PLN)**, o sistema analisa o texto da solicitação e realiza a **autoclassificação**, direcionando o chamado para o setor responsável (Hardware, Software, Redes, etc.) sem intervenção humana inicial.

---

## 🛠️ Tecnologias e Complexidade Técnica
Para atender aos requisitos de alta disponibilidade e análise de dados, utilizamos:

* **Backend:** Framework [NestJS](https://nestjs.com/) (Node.js) com TypeScript, garantindo uma arquitetura escalável e tipagem forte.
* **Database:** PostgreSQL (Banco Relacional) para garantir a integridade referencial dos chamados e usuários.
* **IA/Data Science:** Scripts em Python integrados para classificação de texto e análise de padrões.
* **Frontend:** Interface responsiva focada em UX (User Experience) para dashboards analíticos.

---

## ✨ Funcionalidades
- [x] **Autoclassificação Inteligente:** IA que "lê" o chamado e define a categoria.
- [x] **Dashboards de Gestão:** Visualização de KPIs como tempo médio de atendimento e volume por setor.
- [x] **Níveis de Acesso:** Diferentes permissões para Usuários, Técnicos e Administradores.
- [x] **Relatórios Exportáveis:** Histórico detalhado para auditoria e melhoria de processos.

---

## 🌍 Impacto Social e ODS
O projeto está diretamente alinhado ao **ODS 9 (Indústria, Inovação e Infraestrutura)**. Ao automatizar processos burocráticos e otimizar a infraestrutura lógica de suporte, promovemos a inovação tecnológica dentro das organizações, tornando-as mais eficientes e resilientes.

---

## 🚀 Como Rodar o Projeto
1. Clone este repositório:
   ```bash
   git clone [https://github.com/SimonUzar/projeto_integrador.git](https://github.com/SimonUzar/projeto_integrador.git)

2. Instale as dependências:
Bash
npm install

3. Configure o arquivo .env (use o .env.example como base).

4. Inicie o servidor em modo de desenvolvimento:
Bash
npm run start:dev

👥 Equipe
Simon Uzar Rocha Cruz - Líder de Projeto / Dev

Gustavo Diniz de Morais - Dev

Kevin Harold Pereira Pichol - Dev

Lucas Matheus D’Almeida Furtado - Dev

Lucas Petroli - Dev
