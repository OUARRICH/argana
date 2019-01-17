import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from './product';
import { MatDialog } from '@angular/material';
import { ProductDetail } from './product-detail';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {}

  products: Product [];
  displayedColumns: string[] = ['name', 'price', 'inStock', 'onOrder'];

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe((data: Product []) => {
        this.products = data;
      })
  }

  displayProduct(row) {
    const dialogRef = this.dialog.open(ProductDetail, {
      width: '250px',
      data: row
    });

    dialogRef.afterClosed().subscribe((data: Product) => {
      this.productsService.updateProduct(data)
        .subscribe((res: any) => {
          console.log(res);
        },(error : any) => {
          console.log(error);
        })
    });
  }
}
