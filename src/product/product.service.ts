import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ProductService {
  list() {
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

  create(body: Request['body']) {
    return {
      name: body,
      message: `post request performed successfully`,
    };
  }

  update(params, req) {
    return {
      id: params.id,
      name: 'mohammed hashmi',
      email: 'hashmi.smf@gmail.com',
      body: req.body,
      message: 'product updated successfully',
    };
  }

  delete(params, req) {
    return {
      id: params.id,
      name: 'Deleted product name',
      description: 'deleted product description',
      body: req.body,
      message: 'product deleted successfully',
    };
  }
}
