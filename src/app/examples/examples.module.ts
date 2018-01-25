import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {StarterViewComponent} from "./starterview.component";
import {LoginComponent} from "./login.component";
import {Dashboard1Component} from "./dashboards/dashboard1.component";
import {Dashboard2Component} from "./dashboards/dashboard2.component";
import {Dashboard3Component} from "./dashboards/dashboard3.component";
import {Dashboard4Component} from "./dashboards/dashboard4.component";
import {Dashboard41Component} from "./dashboards/dashboard41.component";
import {Dashboard5Component} from "./dashboards/dashboard5.component";

// Chart.js Angular 2 Directive by Valor Software (npm)
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlotModule } from '../components/charts/flotChart';
import { IboxModule } from '../components/common/ibox/ibox.module';
import { PeityModule } from '../components/charts/peity';
import { SparklineModule } from '../components/charts/sparkline';
import { JVectorMapModule } from '../components/map/jvectorMap';


@NgModule({
  declarations: [
    StarterViewComponent,
    LoginComponent,
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    Dashboard4Component,
    Dashboard41Component,
    Dashboard5Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PeityModule,
    SparklineModule,
    ChartsModule,
    FlotModule,
    IboxModule,
    JVectorMapModule
  ],
  exports: [
    StarterViewComponent,
    LoginComponent,
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    Dashboard4Component,
    Dashboard41Component,
    Dashboard5Component
  ],
})

export class ExamplesModule {
}
