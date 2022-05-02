import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheaderComponent } from './topheader/topheader.component';

import {HttpClientModule} from '@angular/common/http';
import {MyApiServicesService} from './services/my-api-services.service';
import { FooterComponent } from './footer/footer.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [	
    AppComponent,
      TopheaderComponent,
      FooterComponent,
      InventoryComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
