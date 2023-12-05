import { IsString, IsPositive, IsNumber } from 'class-validator';

export class ProductCreateDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsPositive({ message: 'Price must be a positive number.' })
  @IsNumber()
  price: number;
}
