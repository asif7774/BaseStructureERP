import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';




@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,

    // BS
    PerfectScrollbarModule,

    ButtonsModule,
    DropDownsModule,

    HttpClientModule,         
    FormsModule,
    TooltipModule.forRoot(),
  ],
  declarations: [SignupComponent, SigninComponent, SetPasswordComponent, ResetPasswordComponent]
})
export class AccountModule { }
