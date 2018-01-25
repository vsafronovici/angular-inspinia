import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'navpath',
  templateUrl: './nav-path.component.html',
  styleUrls: ['./nav-path.component.css']
})
export class NavPathComponent implements OnInit {

  public header: string
  public linkPaths: any[] = []
  public lastPath: string = ''

  constructor(private activatedRoute: ActivatedRoute, private location: Location, private router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        // console.log(event)
        this.generateNavPaths(event.url)
      });
  }



  ngOnInit() {
    this.generateNavPaths(this.location.path())
  }

  generateNavPaths(path: string) {
    // console.log('generate path')
    let splits: string[] = path.split('/')
    if (splits.length > 0) {
      this.lastPath = splits.pop()
      this.linkPaths = []
      let currentPath = ''
      splits.filter(o => o.length > 0).forEach((o) => {
        currentPath += `/${o}`
        this.linkPaths.push({
          text: o,
          href: currentPath
        })
      })
    }

    /* Play with that */
    if (path.includes('users')) {
      this.header = 'Users'
    } else if (path.includes('dashboards')){
      this.header = 'Dashboards'
    } else {
      this.header = 'Home'
    }

  }



}
