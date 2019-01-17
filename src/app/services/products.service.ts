import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../products/product';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:5000/api/products');
  }

  updateProduct(product: Product) {
    return this.http.put(`http://localhost:5000/api/products/${product._id}`, product);
  }
}
