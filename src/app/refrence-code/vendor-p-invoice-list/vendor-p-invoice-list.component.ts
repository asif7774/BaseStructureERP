// import { Component, OnInit, HostListener } from '@angular/core';
// import { UIHelper } from 'src/app/helpers/ui.helpers';
// import { Commonservice } from 'src/app/services/commonservice.service';
// import { GridComponent } from '@progress/kendo-angular-grid';
// import { vendorInvoiceList } from '../../../DemoData/vendor-data';
// import { CurrentSidebarInfo } from 'src/app/models/sidebar/current-sidebar-info';
// import { ComponentName, ModuleName } from 'src/app/enums/enums';
// import { Configuration } from '../../../assets/configuration';


// @Component({
//   selector: 'app-vendor-p-invoice-list',
//   templateUrl: './vendor-p-invoice-list.component.html',
//   styleUrls: ['./vendor-p-invoice-list.component.scss']
// })
// export class VendorPInvoiceListComponent implements OnInit {

//   constructor(private commonService:Commonservice) { }
//   imgPath = Configuration.imagePath;
//   isMobile: boolean;
//   isColumnFilter: boolean = false;
//   isColumnGroup: boolean = false;
//   gridHeight: number;
//   showLoader: boolean = false;
//   searchRequest: string = '';
//   public gridData: any[];
  
  
//   @HostListener('window:resize', ['$event'])
//   onResize(event) {
  
//     this.gridHeight = UIHelper.getMainContentHeight();

  
//     this.isMobile = UIHelper.isMobile();
//   }
  

//   ngOnInit() {
  
//     const element = document.getElementsByTagName("body")[0];
//     element.className = "";
//     element.classList.add("opti_body-vendor");
//     element.classList.add("opti_body-invoice-list");
//     element.classList.add("opti_body-main-module");
    
 
    
//     this.gridHeight = UIHelper.getMainContentHeight();
 
    
//     this.isMobile = UIHelper.isMobile();
//     this.getInvoiceList();
//   }

  
//   public getInvoiceList() {
//     this.showLoader = true;
//     this.gridData = vendorInvoiceList;
//     setTimeout(()=>{    
//       this.showLoader = false;
//     }, 1000);
//   }

//   onFilterChange(checkBox:any,grid:GridComponent) {
//     if(checkBox.checked==false){
//       this.clearFilter(grid);
//     }
//   }

//   clearFilter(grid:GridComponent){      
  
//   }

//   openSalesOrderDetailOnSelectSalesOrder(e){
//     let currentsideBarInfo: CurrentSidebarInfo=new CurrentSidebarInfo();
//     currentsideBarInfo.ComponentName=ComponentName.VendorPaymentDetail;
//     currentsideBarInfo.ModuleName=ModuleName.VendorPayments;
//     currentsideBarInfo.SideBarStatus=true;    
//     this.commonService.setCurrentSideBar(currentsideBarInfo);
//   }

// }
