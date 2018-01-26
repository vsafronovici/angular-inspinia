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

  private routerSubscribers: Map<string, any> = new Map()
  public path: string

  constructor(private router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.path = event.url
        this.routerSubscribers.forEach((value, key) => {
          // console.log(key + '-' + value)
          console.log('running for ', key)
          console.log('obj ', value)
          value.func.call(value.ctx, event.url)
          value.ctx.sayHi(event.url)
        })
      });
  }

  public registerRouterSubscribers = (key: string, obj) => {
    const ctx = this
    console.log('-- subscribed for ', key)
    ctx.routerSubscribers.set(key, obj)
  }

  public ngOnInit():any {
    detectBody();
  }

  public onResize(){
    detectBody();
  }

}
