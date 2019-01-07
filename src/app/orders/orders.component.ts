import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }

  orders: any [];
  displayedColumns: string[] = ['orderDate', 'client', 'amount', 'shippedDate', 'delivred', 'paid'];

  ngOnInit() {
    this.ordersService.getOrders()
      .subscribe((data: any) => {
        this.orders = data;
      });
  }

}
