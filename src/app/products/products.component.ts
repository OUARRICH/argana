import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import Product from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) {}

  products: Product [];
  displayedColumns: string[] = ['name', 'price', 'inStock', 'onOrder'];

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe((data: Product []) => {
        this.products = data;
      })
  }
}
