import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
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
  create(@Req() req: Request) {
    return this.productService.create(req.body);
  }

  @Patch('/:id')
  update(@Param() params: { id: number }, @Req() req: Request) {
    return this.productService.update(params, req);
  }

  @Delete('/:id')
  delete(@Param() params: { id: number }, @Req() req: Request) {
    return this.productService.delete(params, req);
  }
}
