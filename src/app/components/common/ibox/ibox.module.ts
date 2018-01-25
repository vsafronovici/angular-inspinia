import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BsDropdownModule} from 'ngx-bootstrap';

import {IboxtoolsComponent} from "./iboxtools.component";
import {IboxComponent} from "./ibox.component";

@NgModule({
  declarations: [IboxtoolsComponent, IboxComponent],
  imports     : [BrowserModule,BsDropdownModule.forRoot()],
  exports     : [IboxtoolsComponent, IboxComponent],
})

export class IboxModule {}
