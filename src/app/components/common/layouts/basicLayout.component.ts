import { Component } from '@angular/core';
import { detectBody } from '../../../app.helpers';
import {NavigationEnd, Router} from "@angular/router";

declare var jQuery:any;

@Component({
  selector: 'basic',
  templateUrl: 'basicLayout.template.html',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class BasicLayoutComponent {

  public path: string

  constructor(private router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.path = event.url
      });
  }

  public ngOnInit():any {
    detectBody();
  }

  public onResize(){
    detectBody();
  }

}
