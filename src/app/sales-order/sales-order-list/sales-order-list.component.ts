import { Component, OnInit, HostListener } from '@angular/core';
import { UIHelper } from '../../helpers/ui.helpers';
import { Commonservice } from '../../services/commonservice.service';
import { GridComponent } from '@progress/kendo-angular-grid';
import { CurrentSidebarInfo } from '../../models/sidebar/current-sidebar-info';
import { ModuleName, ComponentName } from '../../enums/enums';
import { salesOrderList } from '../../DemoData/sales-order';

@Component({
  selector: 'app-sales-order-list',
  templateUrl: './sales-order-list.component.html',
  styleUrls: ['./sales-order-list.component.scss']
})
export class SalesOrderListComponent implements OnInit {

  pageSizeNumber:number = 5;
  public listItems: Array<string> = [ "5", "10", "15" ];
  public selectedValue: string = "5";

  isMobile: boolean;
  isColumnFilter: boolean = false;
  isColumnGroup: boolean = false;
  gridHeight: number;
  showLoader: boolean = false;
  searchRequest: string = '';
  
  incr(num){
    this.pageSizeNumber = num;
  }

  // UI Section
    @HostListener('window:resize', ['$event'])
    onResize(event) {
      // apply grid height
      this.gridHeight = UIHelper.getMainContentHeight();

      // check mobile device
      this.isMobile = UIHelper.isMobile();
    }
  // End UI Section

  

  constructor(private commonService:Commonservice) { }

  public gridData: any[];

  ngOnInit() {

    // Apply class on body start
    const element = document.getElementsByTagName("body")[0];
    element.className = "";
    element.classList.add("opti_body-sales-order");
    element.classList.add("opti_body-main-module");
    // Apply class on body end

    // apply grid height
    this.gridHeight = UIHelper.getMainContentHeight();

    // check mobile device
    this.isMobile = UIHelper.isMobile();

    
    this.getOrderList();
  }

  /**
   * Method to get list of inquries from server.
  */
  public getOrderList() {
    this.showLoader = true;
    this.gridData = salesOrderList;
    setTimeout(()=>{    
      this.showLoader = false;
    }, 1000);
  }



  onFilterChange(checkBox:any,grid:GridComponent)
  {
    if(checkBox.checked==false){
      this.clearFilter(grid);
    }
  }

  clearFilter(grid:GridComponent){      
    //grid.filter.filters=[];
  }

  openSalesOrderDetailOnSelectSalesOrder(e){
    let currentsideBarInfo: CurrentSidebarInfo=new CurrentSidebarInfo();
    currentsideBarInfo.ComponentName=ComponentName.SalesOrderDetail;
    currentsideBarInfo.ModuleName=ModuleName.SalesOrder;
    currentsideBarInfo.SideBarStatus=true;    
    
    this.commonService.setCurrentSideBar(currentsideBarInfo);
  }

}
