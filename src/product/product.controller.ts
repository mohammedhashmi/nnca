import { Controller, Get } from '@nestjs/common';

@Controller('/products')
export class ProductController {
  @Get()
  products() {
    return [
      {
        id: 1,
        name: 'product 1',
        description: 'product 1',
        price: 100,
      },
      {
        id: 2,
        name: 'product 2',
        description: 'product 2',
        price: 200,
      },
      {
        id: 3,
        name: 'product 3',
        description: 'product 3',
        price: 300,
      },
      {
        id: 500,
        name: 'india product',
        description: 'india product',
        price: 500,
      },
      {
        id: 600,
        name: 'india product',
        description: 'india product',
        price: 600,
      },
    ];
  }
}
