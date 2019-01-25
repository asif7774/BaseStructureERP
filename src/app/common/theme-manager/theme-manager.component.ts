import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Commonservice } from '../../services/commonservice.service';
import { opticonstants } from '../../constants';

import * as $ from "jquery";

@Component({
  selector: 'app-theme-manager',
  templateUrl: './theme-manager.component.html',
  styleUrls: ['./theme-manager.component.scss']
})
export class ThemeManagerComponent implements OnInit {

  // Event emitter variable.
  @Output() messageEvent = new EventEmitter<boolean>();
  constructor(private commonService: Commonservice) { }

  opalColor = opticonstants.OPALTHEMECOLOR;
  urbanColor = opticonstants.URBANTHEMECOLOR;
  skypeColor = opticonstants.SKYPETHEMECOLOR;
  greenColor = opticonstants.GREEN;
  stripeColor = opticonstants.STRIPE;
  coffeeColor = opticonstants.COFFEE;
  newtrendColor = opticonstants.NEWTREND2018;
  castfyColor = opticonstants.CASTFY;
  sunriseColor = opticonstants.SUNRISE;
  maldiveColor = opticonstants.MALDIVE;
  boraboraColor = opticonstants.BORABORA;
  bluelagooColor = opticonstants.BLUELAGOO;

  selectedColor = this.stripeColor;
  selectedThemeID = opticonstants.STRIPEID;

  


  ngOnInit() {
    setTimeout(()=>{
      $('#'+this.selectedThemeID).click(); 
    }, 500);
  }

  // Function called on cross icon.
  onClose() {
    this.messageEvent.emit(false);
  }

  onThemeChange(themeColor: any) {
    // alert(themeColor);
    this.commonService.setThemeData(themeColor);
    
  }

  // onThemeChange1(themeColor1: any){
  //   alert(themeColor1);
  // }

}
