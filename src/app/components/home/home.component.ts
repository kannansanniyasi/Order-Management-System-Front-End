import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { OrderserviceService } from 'src/app/services/orderserice/orderservice.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private productService:ProductService,private orderService:OrderserviceService) { }
  title:any;
  orderForm:FormGroup;
  productList:any;
  errorMsg:any;
  successMsg:any;
  ngOnInit(): void {
    this.title="Order Management Systems";

   

    this.resetData()

  }

  resetData()
  {
    this.orderForm=this.formBuilder.group({
      customerName: ['', Validators.compose([Validators.required])],
      orderDate: ['',Validators.required],
      shippingAddress: ['', Validators.required],
      productName: ['', Validators.required],
      counts:['', Validators.required]
    });

    this.errorMsg="";
    this.successMsg="";
    this.doGetProductList();
  }

  doGetProductList()
  {
    this.productService.doGetProductList().subscribe(
      (data:any)=>
      {
        this.productList=data;
      },
      error=>
      {
        console.log("Error :"+error);
      }
    );
  }

  addOrder(orderForm)
  {
    this.orderService.addOrder(orderForm).subscribe(
    (data:any)=>
    {
       if(data.flg)
      {
        console.log("Save Successfully");
        this.resetData();
        this.successMsg="Order Registeration Successfully"
        this.errorMsg="";
     
      }else
      {
        console.log("Error :"+data.message);
        this.errorMsg=data.message;
        this.successMsg="";
     
      }
    },
    error=>
    {
      console.log("Error :"+error);
    }
    );
  }

}
