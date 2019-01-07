import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get('http://localhost:5000/api/orders');
  }
}
