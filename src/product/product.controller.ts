import {
  Body,
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
import { ProductCreateDto } from './dto/product-create.dto';

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
  createProduct(@Body() productCreateDto: ProductCreateDto) {
    return this.productService.create(productCreateDto);
  }

  @Patch('/:id')
  updateProduct(@Param() params: { id: number }, @Req() req: Request) {
    return this.productService.update(params, req);
  }

  @Delete('/:id')
  deleteProduct(@Param() params: { id: number }, @Req() req: Request) {
    return this.productService.delete(params, req);
  }
}
