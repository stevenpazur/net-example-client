import { Component, OnInit } from '@angular/core';
import { MyApiServicesService } from '../services/my-api-services.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private _service:MyApiServicesService) { }

  disabled = false;
  ShopId: string = '';
  vanilla: string = '';
  chocolate: string = '';
  strawberry: string = '';
  cookies: string = '';
  isLoading:boolean = true;
  inventoryData:any = [];
  shopData:any = [];
  updateStatus:string = "";

  ngOnInit(): void {
    this._service.topHeading().subscribe(
      (data)=>{
        console.log(data);
        this.shopData = data;
      },
      (error)=>{
        console.error(error);
      }
    );
    this.updateInventoryListing();
  }

  btnClick(ShopId:string, vanilla:string, chocolate:string, strawberry:string, cookies:string): void {
    this.disabled = true;
    this._service.putCall(ShopId, vanilla, chocolate, strawberry, cookies).subscribe(
    (data)=>{
      console.log("successfully updated shop inventory");
      this.updateStatus = "Success";
    },
    (error)=>{
      console.log("oops");
      console.error(error);
      this.updateStatus = error.error.substring(0, 100) + "...";
    });
    this.updateInventoryListing();
    this.disabled = false;
  }

  updateInventoryListing(): void{
    this.isLoading = true;
    this._service.getInventoryCall().subscribe(
      (data)=>{
        this.isLoading = false;
        this.inventoryData = data;
      },
      (error)=>{
        console.error(error);
      }
    );
  }
}
