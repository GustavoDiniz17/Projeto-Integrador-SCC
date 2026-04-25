import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CargosModule } from './cargos/cargos.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { StatusModule } from './status/status.module';
import { ChamadosModule } from './chamados/chamados.module';
import { AuthModule } from './auth/auth.module'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'Admin@123',
      database: process.env.DB_NAME || 'scc_db',
      entities: ['dist/**/*.entity.js'],
      synchronize: false,
      logging: true,
      logger: 'advanced-console',
    }),
    UsuariosModule,
    CargosModule,
    DepartamentosModule,
    StatusModule,
    ChamadosModule,
     AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
