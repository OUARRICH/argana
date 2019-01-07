import { Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { OrdersComponent } from "./orders/orders.component";

export const appRoutes: Routes = [
    { 
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    { path: 'products', component: ProductsComponent },
    { path: 'orders', component: OrdersComponent }
];
