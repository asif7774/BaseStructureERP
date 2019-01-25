import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/account/user-model';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {

  showLoader: boolean = false;
  userId: string;
  userLoginEmail: string='info@gmail.com';
  resetPassword: string;
  userModel: UserModel = new UserModel();
  passwordStrengthStatus: number = 0;
  constructor() { }

  ngOnInit() {

    const element = document.getElementsByTagName("body")[0];
    element.className = "";
    element.classList.add("opti_body-set-password");
    element.classList.add("opti_account-module");

  }

  setPassword() {
    this.showLoader = true;
    setTimeout(()=>{ 
      this.showLoader = false;
    }, 500);
  }

 
  public checkPasswordStrength(password: string) {

    var numbers = "[0-9]+";
    var passwordScore = 0;
    var specialCharacters = "!£$%^&*_@#~?";
    let numRegx = new RegExp(numbers);
    let lowerChars = new RegExp("[a-z]");
    let upperChars = new RegExp("[A-Z]");
    // Contains special characters
    for (var i = 0; i < password.length; i++) {
      if (specialCharacters.indexOf(password.charAt(i)) > -1) {
        passwordScore += 20;
        break;
      }
    }
    // Contains numbers
    if (numRegx.test(password)) passwordScore += 20;

    // Contains lower case letter
    if (lowerChars.test(password)) passwordScore += 20;

    // Contains upper case letter
    if (upperChars.test(password)) passwordScore += 20;

    if (password.length >= 8) passwordScore += 20;

    var strength = "";
    if (passwordScore >= 100) {
      strength = "FullStrong";
      this.passwordStrengthStatus = 4;
    }
    else if (passwordScore >= 80) {
      strength = "Strong";
      this.passwordStrengthStatus = 3;
    }
    else if (passwordScore >= 60) {
      strength = "Medium";
      this.passwordStrengthStatus = 2;
    }
    else if (passwordScore >= 40) {
      strength = "weak";
      this.passwordStrengthStatus = 1;
    }
    else {
      this.passwordStrengthStatus = 0;
      strength = "Very Weak";
    }
   

  }

}
