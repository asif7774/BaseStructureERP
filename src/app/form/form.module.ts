import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormFieldComponent } from './form-field/form-field.component';

import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    DropDownsModule,
    InputsModule
    
  ],
  declarations: [FormFieldComponent],
  exports:[FormFieldComponent]
})
export class FormModule { }
