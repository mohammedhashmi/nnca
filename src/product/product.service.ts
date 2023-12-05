import { Injectable } from '@nestjs/common';
import { ProductCreateDto } from './dto/product-create.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  list(): Promise<Product[]> {
    return this.productRepository.find();
    // return [
    //   {
    //     id: 1,
    //     name: 'product 1',
    //     description: 'product 1',
    //     price: 100,
    //   },
    //   {
    //     id: 2,
    //     name: 'product 2',
    //     description: 'product 2',
    //     price: 200,
    //   },
    //   {
    //     id: 3,
    //     name: 'product 3',
    //     description: 'product 3',
    //     price: 300,
    //   },
    //   {
    //     id: 500,
    //     name: 'india product',
    //     description: 'india product',
    //     price: 500,
    //   },
    //   {
    //     id: 600,
    //     name: 'india product',
    //     description: 'india product',
    //     price: 600,
    //   },
    // ];
  }

  create(productCreateDto: ProductCreateDto) {
    const { name, description } = productCreateDto;
    return {
      name,
      description,
      message: `post request performed successfully`,
    };
  }

  update(id, updateProductDto: UpdateProductDto) {
    return {
      id: id,
      name: 'mohammed hashmi',
      email: 'hashmi.smf@gmail.com',
      updateProductDto,
      message: 'product updated successfully',
    };
  }

  delete(id, updateProductDTO) {
    return {
      id: id,
      name: 'Deleted product name',
      description: 'deleted product description',
      updateProductDTO,
      message: 'product deleted successfully',
    };
  }
}
