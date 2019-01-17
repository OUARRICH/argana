import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from './product';
import { floatValidator, intValidator } from './validators';
import { Inject, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './product-detail.html',
    styleUrls: ['./product-detail.scss']
  })
  export class ProductDetail {
  
    constructor(
      public dialogRef: MatDialogRef<ProductDetail>,
      @Inject(MAT_DIALOG_DATA) public data: Product)
    {
        this.productForm = this.createFormGroup(data);
    }
    
    productForm: FormGroup;

    close(): void {
      this.dialogRef.close();
    }

    get name() {
        return this.productForm.get('name');
    }

    get price() {
        return this.productForm.get('price');
    }

    get inStock() {
        return this.productForm.get('inStock');
    }

    get onOrder() {
        return this.productForm.get('onOrder');
    }

    get newProduct() {
        return {...this.data, ...this.productForm.value}
    }
    
    private createFormGroup(data: Product): FormGroup{
        return new FormGroup({
            name: new FormControl(data.name, [Validators.required]),
            price: new FormControl(data.price, [Validators.required, floatValidator]),
            inStock: new FormControl(data.inStock, [Validators.required, intValidator]),
            onOrder: new FormControl(data.onOrder, [Validators.required, intValidator])
        });
    }
  }
