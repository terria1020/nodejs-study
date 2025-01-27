import { JwtService } from '@nestjs/jwt';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly jwtService: JwtService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'secret',
    });
  }

  validate(payload: any) {
    console.log(2);
    console.log('payload', payload);
    // -> payload { sub: null, iat: 1737964485, exp: 1737965085 }
    return {
      userId: payload.sub,
      userName: payload.username,
    };
  }
}
