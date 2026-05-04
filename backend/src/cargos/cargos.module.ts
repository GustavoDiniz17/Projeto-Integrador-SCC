import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CargosService } from './cargos.service';
import { CargosController } from './cargos.controller';
import { Cargo, CargoSchema } from './entities/cargo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cargo.name, schema: CargoSchema }]),
  ],
  controllers: [CargosController],
  providers: [CargosService],
  exports: [CargosService],
})
export class CargosModule {}
