import { Component, OnInit, HostListener } from '@angular/core';
import { UIHelper } from '../helpers/ui.helpers';
import { Commonservice } from '../services/commonservice.service';
import { CurrentSidebarInfo } from '../models/sidebar/current-sidebar-info';

@Component({
  selector: 'app-portal-home',
  templateUrl: './portal-home.component.html',
  styleUrls: ['./portal-home.component.scss']
})
export class PortalHomeComponent implements OnInit {

  isMobile:boolean;
  localRightSectionContainer:boolean;
  currentSidebarInfo:CurrentSidebarInfo=null;
  constructor(private service: Commonservice){ }  
  ngOnInit(){  

    // Remove account related class from body
    const element = document.getElementsByTagName("body")[0];
    element.className = "";

    //this.localRightSectionContainer = this.globals.localRightSectionContainer;
    this.service.currentSidebarInfo.subscribe(
      data=> {
        if(data!=null){
          this.currentSidebarInfo=data;          
          this.localRightSectionContainer=data.SideBarStatus
        }
      }
    );
    

    // UI operations
    this.isMobile =UIHelper.isMobile();
    UIHelper.manageNavigationPanel();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) { 
    // UI operations   
    this.isMobile =UIHelper.isMobile();
    UIHelper.manageNavigationPanel();
  }

}
