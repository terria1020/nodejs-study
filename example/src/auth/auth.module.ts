import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController, AuthV2Controller } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController, AuthV2Controller],
  providers: [AuthService, LocalStrategy, JwtStrategy, SessionSerializer],
  imports: [
    forwardRef(() => UsersModule),
    PassportModule.register({ session: true }),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '600s',
      },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
