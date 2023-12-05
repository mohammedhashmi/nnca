import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class AuthService {
  constructor(private productService: ProductService) {}
  async validateUser(loginDto: LoginDto) {
    const product = await this.productService.findByName(loginDto.name);
    if (product && product.password === loginDto.password) {
      return product;
    }
    return null;
  }
}
