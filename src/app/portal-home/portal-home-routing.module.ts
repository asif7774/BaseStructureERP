import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesOrderListComponent } from '../sales-order/sales-order-list/sales-order-list.component';
import { PortalHomeComponent } from './portal-home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormFieldComponent } from '../form/form-field/form-field.component';

const routes: Routes = [

  {
    path: '', component: PortalHomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path:'dashboard', component:DashboardComponent },
      { path: 'salesorder', component:SalesOrderListComponent },
      { path: 'form', component:FormFieldComponent },
    ]
    
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalHomeRoutingModule { }
