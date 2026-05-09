import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || 'sua-chave-secreta-super-segura-aqui',
    });
  }

  async validate(payload: any) {
    return {
      id: payload.id,
      email: payload.email,
      nome: payload.nome,
      cargo: payload.cargo,
      nivel_acesso: payload.nivel_acesso,
    };
  }
}
