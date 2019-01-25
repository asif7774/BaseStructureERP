import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const element = document.getElementsByTagName("body")[0];
    element.className = "";
    element.classList.add("opti_body-landingpage");
    element.classList.add("opti_account-module");
  }

  navigateToSignUp(value: number) {
    this.router.navigateByUrl('account/signup');
  }

  navigateToSignIn(){
    this.router.navigateByUrl('account/login');
  }

  navigateToset(){
    this.router.navigateByUrl('account/setpassword');
  }

  navigateToreset(){
    this.router.navigateByUrl('account/resetpassword');
  }

  navigateTohome(){
    this.router.navigateByUrl('home');
  }

}
