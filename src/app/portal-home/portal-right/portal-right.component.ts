import { Component, OnInit, Output, EventEmitter, HostListener, ViewChild, Input } from '@angular/core';
import { Commonservice } from '../../services/commonservice.service';
import { opticonstants } from '../../constants';
import { UIHelper } from '../../helpers/ui.helpers';
import { CurrentSidebarInfo } from '../../models/sidebar/current-sidebar-info';



@Component({
  selector: 'app-portal-right',
  templateUrl: './portal-right.component.html',
  styleUrls: ['./portal-right.component.scss']
})
export class PortalRightComponent implements OnInit {
  @Input() currentSidebarInfo: CurrentSidebarInfo;
  // Event emitter variable.
  //  @Output() messageEvent = new EventEmitter<boolean>();
  constructor(private commonService: Commonservice) { }


  ngOnInit() {
  }
  /**
  * 
  * @param status close right content section, will pass false
  */
  closeRightSidebar() {
    let currentSidebarInfo: CurrentSidebarInfo = new CurrentSidebarInfo();
    currentSidebarInfo.SideBarStatus = false;
    this.commonService.setCurrentSideBar(currentSidebarInfo);
  }

}
