import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_SECRET_KEY'),
      scope: ['email', 'profile'],
      callbackURL: 'http://localhost:3000/api/v1/auth/oauth2/google/callback',
    });
  }

  validate(...args: any[]): any {
    console.log('args', args);
    return true;
    // throw new Error('Method not implemented.');
  }
}
