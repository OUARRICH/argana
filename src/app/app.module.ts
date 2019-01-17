import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { appRoutes } from './routes';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetail } from './products/product-detail';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  entryComponents: [ProductsComponent, ProductDetail],
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent,
    ProductDetail
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
