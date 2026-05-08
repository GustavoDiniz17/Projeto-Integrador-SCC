# Sistema de Controle de Chamados (SCC) - Fullstack (NoSQL Edition)

Projeto completo de um **Sistema de Controle de Chamados** com **Frontend em Flutter** e **Backend em NestJS v11** com integração de **IA para classificação automática de prioridade**.

> **Nota de Migração**: Este projeto foi migrado de MySQL para **MongoDB Atlas** para garantir maior escalabilidade e flexibilidade de dados.

## 📁 Estrutura do Projeto

```
scc-sistema-finalizado/
├── backend/              # NestJS v11 - API REST (Mongoose/MongoDB)
│   ├── src/
│   │   ├── usuarios/     # Módulo de Usuários (CRUD completo + Bcrypt)
│   │   ├── chamados/     # Módulo de Chamados com IA (CRUD completo)
│   │   ├── cargos/       # Módulo de Cargos
│   │   ├── departamentos/# Módulo de Departamentos
│   │   ├── status/       # Módulo de Status
│   │   ├── ia/           # Serviço de IA (NLP)
│   │   └── app.module.ts # Configuração principal (MongoDB Connection)
│   ├── .env              # Variáveis de ambiente (Atlas URI)
│   └── package.json      # Dependências
│
└── frontend/             # Flutter - Aplicação Mobile
    ├── lib/
    │   ├── models/       # Modelos de dados
    │   ├── services/     # Serviços (API conectada ao Backend Real)
    │   ├── pages/        # Telas da aplicação (Formulários Funcionais)
    │   ├── widgets/      # Componentes reutilizáveis
    │   └── main.dart     # Ponto de entrada
    └── pubspec.yaml      # Dependências Flutter
```

## 🚀 Como Iniciar

### Pré-requisitos

- **Node.js** v18+ (para o backend)
- **Flutter** 3.0+ (para o frontend)
- **MongoDB Atlas** (Cluster NoSQL)
- **pnpm** ou **npm** (gerenciador de pacotes)

### 1. Configurar o Banco de Dados (MongoDB Atlas)

O sistema utiliza o MongoDB Atlas. Certifique-se de que o arquivo `backend/.env` contém a URI de conexão correta:

```env
MONGODB_URI=mongodb+srv://SCCSystem:2EIlofu4TRRgIO92@cluster0.cw323fj.mongodb.net/scc_db?retryWrites=true&w=majority
```

### 2. Iniciar o Backend (NestJS)

```bash
cd backend
pnpm install
pnpm run start:dev
```

O backend estará disponível em: `http://localhost:3000`
**Documentação Swagger:** `http://localhost:3000/api`

### 3. Iniciar o Frontend (Flutter)

```bash
cd frontend
flutter pub get
flutter run
```

## 🔐 Acesso Inicial (Usuário Supremo)

O banco de dados foi inicializado com um usuário administrador para o primeiro acesso:

- **Email**: `supremo@scc.com`
- **Senha**: `Supremo123`
- **Permissão**: ADMIN (Acesso total para criar outros usuários e gerenciar o sistema)

## 🛠️ Auditoria de QA e Correções Recentes

O sistema passou por uma auditoria rigorosa de "Correção de Bugs" que garantiu:
1. **CORS Habilitado**: O Backend agora aceita requisições do Frontend Flutter.
2. **CRUD Completo**: Implementados métodos de Criar, Editar e Deletar para Usuários e Chamados.
3. **Segurança**: Todas as senhas são criptografadas com `bcryptjs` antes de serem salvas no MongoDB.
4. **Integração Real**: Botões de formulários no Flutter foram conectados aos serviços de API, removendo dependências de Mockups.

## 🤖 Funcionalidade de IA

Ao criar um chamado, a IA analisa a descrição e classifica a prioridade automaticamente:
- **Alta**: Termos como "urgente", "parado", "erro crítico".
- **Média**: Termos como "ajuda", "dúvida", "configuração".
- **Baixa**: Outros termos gerais.

## 📄 Licença

Este projeto é privado e pertence ao usuário.

---

**Status:** ✅ PROJETO 100% OPERACIONAL E AUDITADO
