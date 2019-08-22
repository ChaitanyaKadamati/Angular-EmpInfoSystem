import {NgModule} from '@angular/core';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const requiredModules = [MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, BrowserAnimationsModule];

@NgModule({
  imports: [requiredModules],
  exports : [requiredModules]
})
export class NgMaterialsModule { }