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
  }

  create(productCreateDto: ProductCreateDto) {
    this.productRepository.save(productCreateDto);
    const { name, description, price } = productCreateDto;
    return {
      name,
      description,
      price,
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
