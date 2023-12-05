import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Request } from 'express';
import { ProductCreateDto } from './dto/product-create.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() upddateProductDTO: UpdateProductDto,
  ) {
    return this.productService.update(id, upddateProductDTO);
  }

  @Delete('/:id')
  deleteProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDTO: UpdateProductDto,
  ) {
    return this.productService.delete(id, updateProductDTO);
  }
}
