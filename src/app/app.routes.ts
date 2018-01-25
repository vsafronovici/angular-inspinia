import {Routes} from "@angular/router";

import {Dashboard1Component} from "./examples/dashboards/dashboard1.component";
import {Dashboard2Component} from "./examples/dashboards/dashboard2.component";
import {Dashboard3Component} from "./examples/dashboards/dashboard3.component";
import {Dashboard4Component} from "./examples/dashboards/dashboard4.component";
import {Dashboard41Component} from "./examples/dashboards/dashboard41.component";
import {Dashboard5Component} from "./examples/dashboards/dashboard5.component";

import {StarterViewComponent} from "./examples/starterview.component";
import {LoginComponent} from "./examples/login.component";

import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";
import {UsersComponent} from "./components/pages/user/users/users.component";
import {EditUserComponent} from "./components/pages/user/edit-user/edit-user.component";

export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'starterview', pathMatch: 'full'},

  // App views
  {
    path: 'dashboards', component: BasicLayoutComponent,
    children: [
      {path: 'dashboard1', component: Dashboard1Component},
      {path: 'dashboard2', component: Dashboard2Component},
      {path: 'dashboard3', component: Dashboard3Component},
      {path: 'dashboard4', component: Dashboard4Component},
      {path: 'dashboard5', component: Dashboard5Component}
    ]
  },
  {
    path: 'dashboards', component: TopNavigationLayoutComponent,
    children: [
      {path: 'dashboard41', component: Dashboard41Component}
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      {path: 'starterview', component: StarterViewComponent}
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: EditUserComponent },
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: 'starterview'}
];
