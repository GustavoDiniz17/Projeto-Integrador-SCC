import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
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
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI') || 'mongodb://localhost:27017/scc_db',
      }),
      inject: [ConfigService],
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
