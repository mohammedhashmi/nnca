import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
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
  product(@Param('id', ParseIntPipe) id: number) {
    return this.productService.get(id);
  }

  @Post()
  createProduct(@Body() productCreateDto: ProductCreateDto) {
    return this.productService.create(productCreateDto);
  }

  @Patch('/:id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() upddateProductDTO: UpdateProductDto) {
    return this.productService.update(id, upddateProductDTO);
  }

  @Delete('/:id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
