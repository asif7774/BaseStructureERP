import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesOrderRoutingModule } from './sales-order-routing.module';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { SalesOrderDetailComponent } from './sales-order-detail/sales-order-detail.component';
import { SalesOrderDetailAttachmentComponent } from './sales-order-detail-attachment/sales-order-detail-attachment.component';
import { SalesOrderDetailContentComponent } from './sales-order-detail-content/sales-order-detail-content.component';
import { SalesOrderDetailHomeComponent } from './sales-order-detail-home/sales-order-detail-home.component';
import { SalesOrderDetailNotesComponent } from './sales-order-detail-notes/sales-order-detail-notes.component';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FileDropModule } from 'ngx-file-drop';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  imports: [
    CommonModule,
    SalesOrderRoutingModule,

    GridModule,
    ExcelModule,
    FormsModule,
    AngularSvgIconModule,
    PerfectScrollbarModule,
    DropDownsModule,
    FileDropModule
  ],
  declarations: [SalesOrderListComponent, SalesOrderDetailComponent, SalesOrderDetailHomeComponent, SalesOrderDetailContentComponent, SalesOrderDetailAttachmentComponent, SalesOrderDetailNotesComponent],
  exports:[SalesOrderListComponent, SalesOrderDetailComponent]
})
export class SalesOrderModule { }
