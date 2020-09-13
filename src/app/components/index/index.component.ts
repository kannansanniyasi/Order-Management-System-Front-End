import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from 'src/app/services/orderserice/orderservice.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title:any;
  orderList:any;
  constructor(private orderSerice:OrderserviceService) { }

  ngOnInit(): void {
    this.title="Order Details";
    this.doGetOrderDetails();
  }
  doGetOrderDetails()
  {
    this.orderSerice.doGetOrderDetails().subscribe(
      (data:any)=>
      {
        this.orderList=data;
      },
      error=>
      {
        console.log("Error :"+error);
      }
    );
  }

}
