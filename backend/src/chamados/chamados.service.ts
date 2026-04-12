import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chamado } from './entities/chamado.entity';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { IaService } from '../ia/ia.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ChamadosService {
  constructor(
    @InjectRepository(Chamado)
    private chamadoRepository: Repository<Chamado>,
    private iaService: IaService,
  ) {}

  async create(createChamadoDto: CreateChamadoDto) {
    const prioridade = this.iaService.classifyPriority(createChamadoDto.descricao);
    const codigo = `CH-${Date.now()}`;
    
    const chamado = this.chamadoRepository.create({
      id: uuidv4(),
      ...createChamadoDto,
      prioridade,
      codigo,
    });

    return await this.chamadoRepository.save(chamado);
  }

  async findAll() {
    return await this.chamadoRepository.find();
  }

  async findOne(id: string) {
    return await this.chamadoRepository.findOneBy({ id });
  }

  async findByUsuario(idUsuario: string) {
    return await this.chamadoRepository.find({
      where: { id_usuario_solicitante: idUsuario },
    });
  }

  async findByDepartamento(idDepartamento: string) {
    return await this.chamadoRepository.find({
      where: { id_departamento: idDepartamento },
    });
  }
}
