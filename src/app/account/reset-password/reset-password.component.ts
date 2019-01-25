import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  email:string;
  showLoader:boolean=false;

  constructor() { }

  ngOnInit() {
    const element = document.getElementsByTagName("body")[0];
    element.className = "";
    element.classList.add("opti_body-reset-password");
    element.classList.add("opti_account-module");
  }

  resetPassword(){
    this.showLoader = true;
    setTimeout(()=>{ 
      this.showLoader = false;
    }, 500);
  }

}
