import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';

// App modules/components
import {ExamplesModule} from "./examples/examples.module";
import {LayoutsModule} from "./components/common/layouts/layouts.module";
import { IboxModule } from './components/common/ibox/ibox.module'

import { UsersComponent } from './components/pages/user/users/users.component';
import { EditUserComponent } from './components/pages/user/edit-user/edit-user.component';
import { PanelComponent } from './components/common/panel/panel.component';
import {UserService} from "./services/user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUserComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ExamplesModule,
    LayoutsModule,
    IboxModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
