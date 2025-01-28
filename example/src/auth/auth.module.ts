import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController, AuthV2Controller } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { GoogleStrategy } from './google.strategy';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController, AuthV2Controller],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    GoogleStrategy,
    SessionSerializer,
  ],
  imports: [
    forwardRef(() => UsersModule),
    PassportModule.register({ session: true }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '600s',
        },
      }),
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
