import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:9090/ordermanagement/product/";

  doGetProductList():Observable<any>
  {
    return this.http.get(this.baseUrl+"productList");
  }


}
