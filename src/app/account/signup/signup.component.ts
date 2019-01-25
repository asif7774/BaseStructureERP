import { Component, OnInit, ViewChild } from '@angular/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { RegisterRequest } from '../../models/account/register-req-model';
import { CompanyDetail } from '../../models/company/companyDetail';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  showLoader:boolean=false;
  UserRegData: string = '';
  registerReq: RegisterRequest = new RegisterRequest();
  public emailAlredayExists: boolean = false;
  invalidRole: boolean = false;
  turmsOfUse: any = null;
  invalidCompanyId: boolean = false;
  companyDetail: CompanyDetail = new CompanyDetail();

  // Role
  public roles: Array<{ text: string,value:string }> = [{ text: "Please Select Role", value: '0' }, { text: "User", value: '1' }, { text: "Manager", value: '2' }];
  public selectedItem: { text: string, value: string } = this.roles[0];
  

  // Captcha
  randomstring = ''; 
  capchaText: string;
  invalidCapcha:boolean=false;

  @ViewChild('myCanvas') myCanvas;

  constructor() { }

  ngOnInit() {

    this.getRandomStringForCaptcha();
    this.customCaptcha(this.randomstring);

    const element = document.getElementsByTagName("body")[0];
    element.className = "";
    element.classList.add("opti_body-signup");
    element.classList.add("opti_account-module");

    this.registerReq = new RegisterRequest();

  }

  /**
   * 
   * @param string 
   */
  customCaptcha(string){
    let c = this.myCanvas.nativeElement;
    let ctx = c.getContext("2d");
    ctx.font = "15px Arial";
    ctx.clearRect(0, 0, 252, 144);
    ctx.fillStyle = "black";
    ctx.fillText(string, 15, 21);
  }

  /**
   * Function for generate random string
   */
  getRandomStringForCaptcha(){
      let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
      let string_length = 4;
      for (var i=0; i<string_length; i++) {
        let rnum = Math.floor(Math.random() * chars.length);
        this.randomstring += chars.substring(rnum,rnum+1);
      }
  }

  /**
   * Function for change captcha value
   */
  changeCaptcha(){
    this.randomstring = '';
    this.getRandomStringForCaptcha();
    this.customCaptcha(this.randomstring);
  }

  /**
   * 
   */
  changeValue() {
    this.invalidCapcha = false;
  }

  /**
   * 
   */
  submit() {
    this.showLoader = true;
    setTimeout(()=>{ 
      this.showLoader = false;
    }, 500);
  }

  getCompaneyDetail(){

  }

}
