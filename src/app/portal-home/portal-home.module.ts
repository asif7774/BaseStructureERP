import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalHomeRoutingModule } from './portal-home-routing.module';
import { PortalLeftComponent } from './portal-left/portal-left.component';
import { PortalRightComponent } from './portal-right/portal-right.component';
import { PortalTopComponent } from './portal-top/portal-top.component';
import { PortalHomeComponent } from './portal-home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ThemeManagerComponent } from '../common/theme-manager/theme-manager.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { SalesOrderModule } from '../sales-order/sales-order.module';
import { FormModule } from '../form/form.module';



@NgModule({
  imports: [
    CommonModule, 
    PortalHomeRoutingModule,

    // BS
    AngularSvgIconModule, 
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    
    // Angular
    HttpClientModule,         
    FormsModule,

    NgbModule,
    ChartsModule,
    SalesOrderModule,
    FormModule
    

  ],
  declarations: [PortalHomeComponent, PortalLeftComponent, PortalRightComponent, PortalTopComponent, DashboardComponent, ThemeManagerComponent],
  providers:[DashboardComponent]
})
export class PortalHomeModule { }
