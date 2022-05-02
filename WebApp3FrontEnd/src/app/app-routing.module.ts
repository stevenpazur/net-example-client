import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { TopheaderComponent } from './topheader/topheader.component';

const routes: Routes = [
  {path:'', component:TopheaderComponent},
  {path:'inventory', component:InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
