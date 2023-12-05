import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { ProductService } from 'src/product/product.service';

@Controller('auth')
export class AuthController {
  constructor(private productService: ProductService) {}
  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    debugger;
    return this.productService.findByName(loginDto.name);
  }
}
