import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ProductModule } from 'src/product/product.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { jwtConstants } from './constants';

@Module({
  controllers: [AuthController],
  imports: [
    ProductModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
