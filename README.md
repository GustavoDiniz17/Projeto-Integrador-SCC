# Sistema de Controle de Chamados (SCC) - Fullstack

Projeto completo de um **Sistema de Controle de Chamados** com **Frontend em Flutter** e **Backend em NestJS v11** com integração de **IA para classificação automática de prioridade**.

## 📁 Estrutura do Projeto

```
scc-sistema-finalizado/
├── backend/              # NestJS v11 - API REST
│   ├── src/
│   │   ├── usuarios/     # Módulo de Usuários
│   │   ├── chamados/     # Módulo de Chamados com IA
│   │   ├── cargos/       # Módulo de Cargos
│   │   ├── departamentos/# Módulo de Departamentos
│   │   ├── status/       # Módulo de Status
│   │   ├── ia/           # Serviço de IA (NLP)
│   │   └── app.module.ts # Configuração principal
│   ├── .env              # Variáveis de ambiente
│   └── package.json      # Dependências
│
└── frontend/             # Flutter - Aplicação Mobile
    ├── lib/
    │   ├── models/       # Modelos de dados
    │   ├── services/     # Serviços (API, negócio)
    │   ├── pages/        # Telas da aplicação
    │   ├── widgets/      # Componentes reutilizáveis
    │   └── main.dart     # Ponto de entrada
    └── pubspec.yaml      # Dependências Flutter
```

## 🚀 Como Iniciar

### Pré-requisitos

- **Node.js** v18+ (para o backend)
- **Flutter** 3.0+ (para o frontend)
- **MySQL** 8.0+ (banco de dados)
- **pnpm** (gerenciador de pacotes do Node)

### 1. Configurar o Banco de Dados

Certifique-se de que o MySQL está rodando com as seguintes credenciais:

```
Host: localhost
Porta: 3306
Usuário: root
Senha: Admin@123
Banco: scc_db
```

Se o banco não existir, execute o script SQL fornecido para criar as tabelas.

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

## 🔌 Integração Frontend-Backend

O frontend está configurado para se conectar ao backend através da URL base:

```
http://localhost:3000/
```

Os endpoints disponíveis são:

- **GET /usuarios** - Listar todos os usuários
- **GET /usuarios/:id** - Buscar usuário por ID
- **GET /cargos** - Listar cargos
- **GET /departamentos** - Listar departamentos
- **GET /status** - Listar status
- **GET /chamados** - Listar chamados
- **POST /chamados** - Criar novo chamado (com classificação de prioridade por IA)

## 🤖 Funcionalidade de IA

Quando um novo chamado é criado, o sistema automaticamente:

1. Analisa a descrição usando **Processamento de Linguagem Natural (NLP)**
2. Classifica a prioridade como: **Alta**, **Média** ou **Baixa**
3. Salva o chamado com a prioridade automática no banco de dados

Exemplo de requisição:

```bash
POST http://localhost:3000/chamados
Content-Type: application/json

{
  "assunto": "Erro no login",
  "descricao": "Não consigo acessar o sistema urgente",
  "id_usuario_solicitante": "uuid-usuario",
  "id_departamento": "uuid-departamento",
  "id_status": "uuid-status"
}
```

Resposta:

```json
{
  "id": "uuid-chamado",
  "codigo": "CH-1712973600000",
  "assunto": "Erro no login",
  "descricao": "Não consigo acessar o sistema urgente",
  "prioridade": "Alta",
  "status": {...},
  "solicitante": {...},
  "departamento": {...},
  "data_abertura": "2026-04-11T22:40:00.000Z"
}
```

## 📊 Banco de Dados

O sistema utiliza as seguintes tabelas:

- **Usuarios** - Usuários do sistema
- **Cargos** - Níveis de acesso (Admin, Técnico, Usuário)
- **Departamentos** - Departamentos da organização
- **Status** - Estados dos chamados
- **Chamados** - Tickets de suporte
- **InteracaoChamado** - Histórico e auditoria

## 🔐 Segurança

- Variáveis de ambiente configuradas em `.env`
- Validação de entrada com `class-validator`
- Relacionamentos de banco de dados com integridade referencial

## 📝 Documentação

- **API Swagger:** Acesse `http://localhost:3000/api` quando o backend estiver rodando
- **Modelos:** Verifique os arquivos em `backend/src/*/entities/`
- **Serviços:** Consulte `backend/src/*/services/`

## 🐛 Troubleshooting

### Backend não conecta ao MySQL

Verifique se:
- O MySQL está rodando
- As credenciais em `.env` estão corretas
- O banco `scc_db` foi criado

### Frontend não consegue conectar ao backend

Verifique se:
- O backend está rodando em `http://localhost:3000`
- A URL base em `frontend/lib/services/api/dev_client.dart` está correta
- Não há firewall bloqueando a porta 3000

## 📄 Licença

Este projeto é privado e pertence ao usuário.

---

**Status:** ✅ PROJETO 100% OPERACIONAL
