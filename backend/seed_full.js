const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config({ path: '.env' });

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado ao MongoDB...');
    
    const db = mongoose.connection.db;
    
    // 1. Limpar coleções (opcional, mas bom para teste limpo)
    // await db.collection('Usuarios').deleteMany({});
    // await db.collection('Cargos').deleteMany({});
    // await db.collection('Departamentos').deleteMany({});
    // await db.collection('Status').deleteMany({});
    // await db.collection('Chamados').deleteMany({});

    // 2. Criar Departamentos
    const deptoTIId = uuidv4();
    await db.collection('Departamentos').updateOne(
      { nome: 'TI' },
      { $set: { id: deptoTIId, nome: 'TI', descricao: 'Tecnologia da Informação', abreviacao: 'TI', ativo: true } },
      { upsert: true }
    );
    const deptoFinId = uuidv4();
    await db.collection('Departamentos').updateOne(
      { nome: 'Financeiro' },
      { $set: { id: deptoFinId, nome: 'Financeiro', descricao: 'Departamento Financeiro', abreviacao: 'FIN', ativo: true } },
      { upsert: true }
    );

    // 3. Criar Cargos
    const cargoAdminId = uuidv4();
    await db.collection('Cargos').updateOne(
      { descricao: 'Admin' },
      { $set: { id: cargoAdminId, descricao: 'Admin', nivel_acesso: 'Admin' } },
      { upsert: true }
    );

    // 4. Criar Status
    const statusPendenteId = uuidv4();
    await db.collection('Status').updateOne(
      { descricao: 'Pendente' },
      { $set: { id: statusPendenteId, descricao: 'Pendente', ativo: true } },
      { upsert: true }
    );
    const statusEmAndamentoId = uuidv4();
    await db.collection('Status').updateOne(
      { descricao: 'Em Andamento' },
      { $set: { id: statusEmAndamentoId, descricao: 'Em Andamento', ativo: true } },
      { upsert: true }
    );

    // 5. Criar Usuário Supremo (se não existir)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('Supermo123', salt);
    const userSupremo = await db.collection('Usuarios').findOne({ email: 'supremo@gmail.com' });
    let userSupremoId = userSupremo ? userSupremo.id : uuidv4();
    
    await db.collection('Usuarios').updateOne(
      { email: 'supremo@gmail.com' },
      { 
        $set: { 
          id: userSupremoId,
          nome: 'Usuário Supremo',
          email: 'supremo@gmail.com',
          senha: hashedPassword,
          id_cargo: cargoAdminId,
          id_departamento: deptoTIId,
          ativo: true
        } 
      },
      { upsert: true }
    );

    // 6. Criar Chamados Reais para Teste da IA
    const chamados = [
      {
        id: uuidv4(),
        codigo: 'CH-1001',
        assunto: 'Sistema lento no setor financeiro',
        descricao: 'Usuários relatam lentidão ao abrir relatórios financeiros.',
        prioridade: 'Alta',
        id_status: statusPendenteId,
        id_usuario_solicitante: userSupremoId,
        id_departamento: deptoFinId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        codigo: 'CH-1002',
        assunto: 'Erro ao emitir nota fiscal',
        descricao: 'Sistema apresenta erro 500 ao gerar NF.',
        prioridade: 'Alta', // IA deve classificar como Alta/Crítica
        id_status: statusPendenteId,
        id_usuario_solicitante: userSupremoId,
        id_departamento: deptoFinId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        codigo: 'CH-1003',
        assunto: 'Usuário sem acesso ao painel',
        descricao: 'Novo colaborador não consegue acessar dashboard administrativo.',
        prioridade: 'Média',
        id_status: statusPendenteId,
        id_usuario_solicitante: userSupremoId,
        id_departamento: deptoTIId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    for (const chamado of chamados) {
      await db.collection('Chamados').updateOne(
        { codigo: chamado.codigo },
        { $set: chamado },
        { upsert: true }
      );
    }

    console.log('Seed completo realizado com sucesso!');

  } catch (error) {
    console.error('Erro no seed:', error);
  } finally {
    await mongoose.disconnect();
  }
}
seed();
