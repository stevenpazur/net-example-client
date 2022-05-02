import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyApiServicesService {

  constructor(private _http:HttpClient) { }

  apiUrl = "http://localhost:55000/Shop";
  postUrl = "http://localhost:55000/Inventory";
  getInventory = "http://localhost:55000/Inventory";

  topHeading():Observable<any>
  {
    const headers = {'ApiKeys': 'assetsKey', 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'};
    console.log(headers);
    return this._http.get(this.apiUrl, {'headers':headers});
  }

  putCall(ShopId:string, vanilla:string, chocolate:string, strawberry:string, cookies:string):Observable<any>
  {
    const headers = {'ApiKeys': 'assetsKey', 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'};
    let body = '{"vanillaBarrels": ' + vanilla + ',"chocolateBarrels": ' + chocolate + ',"strawberryBarrels": ' + strawberry + ',"cookieJars": ' + cookies + ',"shopId": ' + ShopId + '}';
    return this._http.put(this.postUrl, body, {'headers':headers});
  }

  getInventoryCall():Observable<any>
  {
    const headers = {'ApiKeys': 'assetsKey', 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'};
    return this._http.get(this.getInventory, {'headers':headers});
  }
}
