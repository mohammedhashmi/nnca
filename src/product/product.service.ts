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

  get(id) {
    const product = this.productRepository.findOne({ where: { id } });
    debugger;
    return product;
  }

  async findByName(name) {
    const product = await this.productRepository.findOne({ where: { name } });
    return product;
  }

  async update(id, updateProductDto: UpdateProductDto) {
    const updated = await this.productRepository.update({ id }, updateProductDto);
    const product = await this.productRepository.findOne({ where: { id } });
    return {
      updated,
      product,
      message: 'product updated successfully',
    };
  }

  delete(id) {
    const product = this.productRepository.delete({ id });
    return {
      product,
      message: 'product deleted successfully',
    };
  }
}
