import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ProductModule } from 'src/product/product.module';

@Module({
  controllers: [AuthController],
  imports: [ProductModule],
})
export class AuthModule {}
