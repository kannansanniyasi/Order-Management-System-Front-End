import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:9090/ordermanagement/order/";
  doGetOrderDetails():Observable<any>
  {
   return  this.http.get(this.baseUrl+"orderList");
  }
  
  addOrder(orderForm:any):Observable<any>
  {
    return this.http.post(this.baseUrl+"saveOrder",orderForm);
  }
}
