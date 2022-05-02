import { Component, OnInit } from '@angular/core';
import {MyApiServicesService} from '../services/my-api-services.service';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css']
})
export class TopheaderComponent implements OnInit {

  constructor(private _services:MyApiServicesService) { }

  topHeadingDisplay:any = [];
  loadingStatus = "Loading...";
  isLoading = true;

  ngOnInit(): void {    
    this._services.topHeading().subscribe((data)=>{
      console.log(data);
      this.topHeadingDisplay = data;
      this.loadingStatus = "";
      this.isLoading = false;
    },
    (error)=>{
      console.error(error);
    });
  }

}
