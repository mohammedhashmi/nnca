import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ProductModule } from 'src/product/product.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  controllers: [AuthController],
  imports: [ProductModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
