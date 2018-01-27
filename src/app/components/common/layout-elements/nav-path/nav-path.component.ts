import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'navpath',
  templateUrl: './nav-path.component.html',
  styleUrls: ['./nav-path.component.css']
})
export class NavPathComponent implements OnInit, OnChanges {

  public header: string
  public linkPaths: any[] = []
  public lastPath: string = ''

  @Input() public path: string

  constructor() {}

  ngOnInit() {
    // this.generateNavPaths(this.path)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('--- changed', this.path)
    this.generateNavPaths(this.path)
  }

  generateNavPaths = (path: string) => {
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
