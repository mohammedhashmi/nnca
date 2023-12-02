import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { Request } from 'express';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  products() {
    return this.productService.list();
  }

  @Get('/:id')
  product(@Param() params: { id: number }) {
    return {
      id: params.id,
      name: `product ${params.id}`,
      description: `product description of ${params.id}`,
      price: 100 * params.id,
    };
  }

  @Post()
  createProduct(@Req() req: Request) {
    return this.productService.create(req.body);
  }
}
