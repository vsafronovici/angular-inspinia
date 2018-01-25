import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { IboxtoolsModule } from './components/common/iboxtools/iboxtools.module'


import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';

// App views
import {DashboardsModule} from "./views/dashboards/dashboards.module";
import {AppviewsModule} from "./views/appviews/appviews.module";

// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";
import { UsersComponent } from './components/user/users/users.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { IboxComponent } from './components/common/ibox/ibox.component';
//import { NavPathComponent } from './components/common/nav-path/nav-path.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUserComponent,
    IboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardsModule,
    LayoutsModule,
    AppviewsModule,
    RouterModule.forRoot(ROUTES),
    IboxtoolsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
