const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
require('dotenv').config();

async function reset() {
  if (!process.env.MONGODB_URI) {
    console.error('Erro: MONGODB_URI não definida no .env');
    process.exit(1);
  }

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    console.log('Conectado ao MongoDB...');
    
    const db = client.db('scc_db');
    const usuariosCol = db.collection('usuarios');

    const novaSenha = 'Supremo123';
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(novaSenha, salt);

    const result = await usuariosCol.updateOne(
      { email: 'supremo@scc.com' },
      { $set: { senha: hashedPassword } }
    );

    if (result.matchedCount > 0) {
      console.log('✅ Senha do usuário Supremo resetada com sucesso!');
      console.log('📧 Email: supremo@scc.com');
      console.log(`🔑 Senha: ${novaSenha}`);
    } else {
      console.log('❌ Usuário supremo@scc.com não encontrado.');
    }

  } catch (error) {
    console.error('❌ Erro:', error);
  } finally {
    await client.close();
  }
}

reset();
