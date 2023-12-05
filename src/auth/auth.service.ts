import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { ProductService } from 'src/product/product.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private productService: ProductService,
    private jwtService: JwtService,
  ) {}
  async validateUser(loginDto: LoginDto) {
    const product = await this.productService.findByName(loginDto.name);
    if (product && product.password === loginDto.password) {
      return product;
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
