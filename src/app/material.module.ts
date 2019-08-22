import {NgModule} from '@angular/core';

import {MatDatepickerModule} from '@angular/material/datepicker';

const requiredModules = [MatDatepickerModule];

@NgModule({
  declarations: [],
  imports: [requiredModules],
  exports : [requiredModules],
  providers: [],
  bootstrap: []
})
export class NgMaterialsModule { }