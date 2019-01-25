import { Component, OnInit, TemplateRef } from '@angular/core';
import { UIHelper } from '../../helpers/ui.helpers';
import { Commonservice } from '../../services/commonservice.service';
import { Router } from '@angular/router';
import { opticonstants } from '../../constants';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-portal-top',
  templateUrl: './portal-top.component.html',
  styleUrls: ['./portal-top.component.scss']
})
export class PortalTopComponent implements OnInit {

  openThemeSetting: boolean = false;
  
  constructor(private modalService: NgbModal, private router: Router, private commonService: Commonservice) { }
  
  selectedThemeColor: string = opticonstants.DEFAULTTHEMECOLOR;
  
  loggedInUserName: string = 'Prashant';
  parentName: string = 'Bizchat';
  applicationVersion:string = '1.0';

  ngOnInit() {
    
    UIHelper.manageThemeCssFile();
    
  }

  // open and close theme setting side panel
  openCloseRightPanel() {
    this.openThemeSetting = !this.openThemeSetting;

    // get theme color
    this.commonService.themeCurrentData.subscribe(
      data => {
        this.selectedThemeColor = data;
      }
    )
  }

  // evenet emitted by client(right) to parenet(top).
  receiverMessage($evenet) {
    this.openThemeSetting = $evenet;
  }

  signOut() {

  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }  


} 
