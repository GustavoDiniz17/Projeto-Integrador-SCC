const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config({ path: '.env' });

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado ao MongoDB...');
    
    const db = mongoose.connection.db;
    
    // 1. Criar Departamento
    const deptoId = uuidv4();
    await db.collection('Departamentos').updateOne(
      { nome: 'TI' },
      { $set: { id: deptoId, nome: 'TI', descricao: 'Departamento de Tecnologia' } },
      { upsert: true }
    );
    console.log('Departamento TI garantido.');

    // 2. Criar Cargo Admin
    const cargoId = uuidv4();
    await db.collection('Cargos').updateOne(
      { descricao: 'Admin' },
      { $set: { id: cargoId, descricao: 'Admin', nivel_acesso: 'Admin' } },
      { upsert: true }
    );
    console.log('Cargo Admin garantido.');

    // 3. Criar Usuário Supremo
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('Supermo123', salt);
    
    await db.collection('Usuarios').updateOne(
      { email: 'supremo@gmail.com' },
      { 
        $set: { 
          id: uuidv4(),
          nome: 'Usuário Supremo',
          email: 'supremo@gmail.com',
          senha: hashedPassword,
          id_cargo: cargoId,
          id_departamento: deptoId,
          ativo: true
        } 
      },
      { upsert: true }
    );
    console.log('Usuário Supremo garantido.');

  } catch (error) {
    console.error('Erro no seed:', error);
  } finally {
    await mongoose.disconnect();
  }
}
seed();
